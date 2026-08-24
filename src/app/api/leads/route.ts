import { createForthLead } from "@/lib/forth";

export const runtime = "nodejs";

type LeadRequest = {
  formType?: unknown;
  debtType?: unknown;
  debtAmount?: unknown;
  paymentStruggleDuration?: unknown;
  stateOfResidence?: unknown;
  combineDebt?: unknown;
  monthlyTakeHomePay?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  tellUsMore?: unknown;
  creditRating?: unknown;
  monthlyPayment?: unknown;
  totalCreditCardDebt?: unknown;
  consent?: unknown;
  landingPage?: unknown;
  website?: unknown;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let body: LeadRequest;

  try {
    if (contentType.includes("application/json")) {
      body = (await request.json()) as LeadRequest;
    } else {
      body = Object.fromEntries(await request.formData()) as LeadRequest;
    }
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const formType = cleanString(body.formType);
  const landingPage = cleanString(body.landingPage) || "unknown";
  const isContactForm =
    formType === "contact" || landingPage.startsWith("/contact");

  if (cleanString(body.website)) {
    return contentType.includes("application/json")
      ? Response.json({ ok: true })
      : Response.redirect(new URL("/book-consultation", request.url), 303);
  }

  const lead = {
    debtType: cleanString(body.debtType),
    debtAmount: cleanString(body.debtAmount),
    paymentStruggleDuration: cleanString(body.paymentStruggleDuration),
    stateOfResidence: cleanString(body.stateOfResidence),
    combineDebt: cleanString(body.combineDebt),
    monthlyTakeHomePay: cleanString(body.monthlyTakeHomePay),
    firstName: cleanString(body.firstName),
    lastName: cleanString(body.lastName),
    email: cleanString(body.email).toLowerCase(),
    phone: normalizePhone(cleanString(body.phone)),
    tellUsMore: cleanString(body.tellUsMore),
    creditRating: cleanString(body.creditRating),
    monthlyPayment: cleanString(body.monthlyPayment),
    totalCreditCardDebt: cleanString(body.totalCreditCardDebt),
    consent: body.consent === true,
    landingPage,
    submittedAt: new Date().toISOString(),
  };

  const contactFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "landingPage",
  ] as const;
  const surveyFields = [
    "debtAmount",
    "stateOfResidence",
    "combineDebt",
    "monthlyTakeHomePay",
    ...contactFields,
  ] as const;
  const requiredStringFields = isContactForm ? contactFields : surveyFields;
  const missingFields: string[] = requiredStringFields.filter(
    (key) => lead[key].length === 0,
  );

  if (!isContactForm && !lead.consent) {
    missingFields.push("consent");
  }

  if (missingFields.length > 0) {
    return Response.json(
      { error: "Missing required fields", fields: missingFields },
      { status: 400 },
    );
  }

  if (!isEmail(lead.email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await createForthLead(lead);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Unable to submit lead right now" },
      { status: 502 },
    );
  }

  return contentType.includes("application/json")
    ? Response.json({ ok: true })
    : Response.redirect(new URL("/book-consultation", request.url), 303);
}
