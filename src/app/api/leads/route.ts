import { createForthLead } from "@/lib/forth";

export const runtime = "nodejs";

type LeadRequest = {
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
  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (cleanString(body.website)) {
    return Response.json({ ok: true });
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
    landingPage: cleanString(body.landingPage) || "unknown",
    submittedAt: new Date().toISOString(),
  };

  const requiredStringFields = [
    "debtAmount",
    "stateOfResidence",
    "combineDebt",
    "monthlyTakeHomePay",
    "firstName",
    "lastName",
    "email",
    "phone",
    "landingPage",
  ] as const;
  const missingFields: string[] = requiredStringFields.filter(
    (key) => lead[key].length === 0,
  );

  if (!lead.consent) {
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

  return Response.json({ ok: true });
}
