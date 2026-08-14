type ForthTokenResponse = {
  access_token?: string;
  token?: string;
  api_key?: string;
  expires_in?: number;
  response?: {
    api_key?: string;
    expires_in?: number;
  };
};

type ForthCreateContactResponse = {
  id?: string | number;
  contact_id?: string | number;
  response?: {
    id?: string | number;
    contact_id?: string | number;
  };
};

type ForthLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tellUsMore: string;
  creditRating?: string;
  monthlyPayment?: string;
  totalCreditCardDebt?: string;
  stateOfResidence: string;
  debtType: string;
  debtAmount: string;
  paymentStruggleDuration: string;
  consent: boolean;
  landingPage: string;
  submittedAt: string;
};

const FORTH_API_BASE_URL =
  process.env.FORTH_API_BASE_URL ?? "https://api.forthcrm.com/v1";

const forthFields = {
  estimatedDebt: process.env.FORTH_FIELD_ESTIMATED_DEBT_ID ?? "749411",
  hardshipDescription:
    process.env.FORTH_FIELD_HARDSHIP_DESCRIPTION_ID ?? "749414",
  leadType: process.env.FORTH_FIELD_LEAD_TYPE_ID ?? "749418",
  leadSource: process.env.FORTH_FIELD_LEAD_SOURCE_ID ?? "750639",
  originalDataSource:
    process.env.FORTH_FIELD_ORIGINAL_DATA_SOURCE_ID ?? "750532",
  utmCampaign: process.env.FORTH_FIELD_UTM_CAMPAIGN_ID ?? "774881",
  creditRating: process.env.FORTH_FIELD_CREDIT_RATING_ID ?? "750644",
  creditRatingSelect:
    process.env.FORTH_FIELD_CREDIT_RATING_SELECT_ID ?? "750799",
  monthlyPayment: process.env.FORTH_FIELD_MONTHLY_PAYMENT_ID ?? "750800",
  totalDebt: process.env.FORTH_FIELD_TOTAL_DEBT_ID ?? "750801",
  strugglingToMakePayments:
    process.env.FORTH_FIELD_STRUGGLING_TO_MAKE_PAYMENTS_ID ?? "760267",
  tellUsMore: process.env.FORTH_FIELD_TELL_US_MORE_ID ?? "750868",
  totalCreditCardDebt:
    process.env.FORTH_FIELD_TOTAL_CREDIT_CARD_DEBT_ID ?? "754651",
} as const;

let cachedToken: { value: string; expiresAt: number } | undefined;

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

async function getForthAccessToken() {
  const now = Date.now();

  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.value;
  }

  const response = await fetch(`${FORTH_API_BASE_URL}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: requiredEnv("FORTH_CLIENT_ID"),
      client_secret: requiredEnv("FORTH_CLIENT_SECRET"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Forth auth failed with ${response.status}`);
  }

  const data = (await response.json()) as ForthTokenResponse;
  const token =
    data.access_token ?? data.token ?? data.api_key ?? data.response?.api_key;
  const expiresIn = data.expires_in ?? data.response?.expires_in;

  if (!token) {
    throw new Error("Forth auth did not return an access token");
  }

  cachedToken = {
    value: token,
    expiresAt: now + (expiresIn ? expiresIn * 1000 : 9 * 24 * 60 * 60 * 1000),
  };

  return token;
}

function leadNote(lead: ForthLead) {
  return [
    "River Relief website lead",
    `Debt type: ${lead.debtType}`,
    `Debt amount: ${lead.debtAmount}`,
    `Payment struggle duration: ${lead.paymentStruggleDuration}`,
    `Tell Us More: ${lead.tellUsMore || "Not provided"}`,
    `Landing page: ${lead.landingPage}`,
    `Consent: ${lead.consent ? "Yes" : "No"}`,
    `Submitted at: ${lead.submittedAt}`,
  ].join("\n");
}

function hardshipSummary(lead: ForthLead) {
  return [
    `Debt type: ${lead.debtType}`,
    `Payment struggle duration: ${lead.paymentStruggleDuration}`,
    `Tell Us More: ${lead.tellUsMore || "Not provided"}`,
    `Consent: ${lead.consent ? "Yes" : "No"}`,
    `Landing page: ${lead.landingPage}`,
  ].join("\n");
}

function contactDataSourceId(landingPage: string) {
  if (landingPage.startsWith("/contact")) {
    return (
      process.env.FORTH_CONTACT_DATA_SOURCE_ID ??
      process.env.FORTH_DEFAULT_DATA_SOURCE_ID ??
      "148362"
    );
  }

  if (landingPage === "/" || landingPage.startsWith("/#")) {
    return (
      process.env.FORTH_HOME_DATA_SOURCE_ID ??
      process.env.FORTH_DEFAULT_DATA_SOURCE_ID ??
      "148675"
    );
  }

  return (
    process.env.FORTH_QUALIFY_DATA_SOURCE_ID ??
    process.env.FORTH_DEFAULT_DATA_SOURCE_ID ??
    "148284"
  );
}

function optionalCustom(fieldId: string, value: string | undefined) {
  const cleanValue = value?.trim();

  if (!cleanValue) {
    return null;
  }

  return { field_id: fieldId, value: [cleanValue] };
}

function debtAmountEstimate(debtAmount: string) {
  if (debtAmount.includes("$30,000") && debtAmount.includes("$50,000")) {
    return 40_000;
  }

  if (debtAmount.includes("$0") && debtAmount.includes("$30,000")) {
    return 30_000;
  }

  if (debtAmount.includes("$50,000")) {
    return 50_000;
  }

  const parsedAmount = Number(debtAmount.replace(/[^0-9.]/g, ""));

  return Number.isFinite(parsedAmount) && parsedAmount > 0
    ? parsedAmount
    : null;
}

function estimatedDebtOption(debtAmount: string) {
  if (debtAmount.includes("$30,000") && debtAmount.includes("$50,000")) {
    return "$30,000 - $40,000";
  }

  if (debtAmount.includes("$0") && debtAmount.includes("$30,000")) {
    return "$20,000 - $30,000";
  }

  if (debtAmount.includes("$50,000")) {
    return "$50,000 - $60,000";
  }

  return "";
}

function debtTypeId(debtType: string) {
  switch (debtType) {
    case "Credit Card Debt":
      return "1";
    case "Personal Loan Debt":
      return "2";
    case "Another Kind Of Debt":
      return "195";
    default:
      return "186";
  }
}

function debtTypeLabel(debtType: string) {
  switch (debtTypeId(debtType)) {
    case "1":
      return "Credit Card";
    case "2":
      return "Personal Loan";
    case "195":
      return "Other";
    default:
      return "Unknown";
  }
}

function shouldCreateDebtRecords() {
  return process.env.FORTH_CREATE_DEBT_RECORDS !== "false";
}

function websiteIntakeCreditorId() {
  return process.env.FORTH_WEBSITE_INTAKE_CREDITOR_ID ?? "28280013";
}

function contactCustoms(lead: ForthLead) {
  const totalCreditCardDebt =
    lead.totalCreditCardDebt ||
    (lead.debtType === "Credit Card Debt" ? lead.debtAmount : "");

  return [
    optionalCustom(
      forthFields.estimatedDebt,
      estimatedDebtOption(lead.debtAmount),
    ),
    optionalCustom(forthFields.totalDebt, lead.debtAmount),
    optionalCustom(forthFields.totalCreditCardDebt, totalCreditCardDebt),
    optionalCustom(forthFields.monthlyPayment, lead.monthlyPayment),
    optionalCustom(forthFields.creditRating, lead.creditRating),
    optionalCustom(forthFields.creditRatingSelect, lead.creditRating),
    optionalCustom(forthFields.tellUsMore, lead.tellUsMore),
    optionalCustom(forthFields.hardshipDescription, hardshipSummary(lead)),
    optionalCustom(forthFields.leadType, "debt-consolidation-intake"),
    optionalCustom(forthFields.leadSource, "Website"),
    optionalCustom(forthFields.strugglingToMakePayments, "Yes"),
    optionalCustom(
      forthFields.originalDataSource,
      process.env.FORTH_LEAD_SOURCE ?? "River Relief Website",
    ),
    optionalCustom(
      forthFields.utmCampaign,
      process.env.FORTH_LEAD_CAMPAIGN ?? "Website Leads",
    ),
  ].filter((custom) => custom !== null);
}

async function createForthDebt(
  apiKey: string,
  contactId: string,
  lead: ForthLead,
) {
  const estimatedAmount = debtAmountEstimate(lead.debtAmount);

  if (!estimatedAmount) {
    return;
  }

  const payload = {
    client_id: contactId,
    creditor: websiteIntakeCreditorId(),
    debt_type: debtTypeId(lead.debtType),
    original_debt_amount: estimatedAmount,
    current_debt_amount: estimatedAmount,
    ...(lead.monthlyPayment ? { current_payment: lead.monthlyPayment } : {}),
    notes: [
      `Debt Type: ${debtTypeLabel(lead.debtType)}`,
      `Website selected debt type: ${lead.debtType}`,
      `Website selected debt amount: ${lead.debtAmount}`,
      `Payment struggle duration: ${lead.paymentStruggleDuration}`,
    ].join("\n"),
  };

  const response = await fetch(`${FORTH_API_BASE_URL}/debts`, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Forth debt creation failed with ${response.status}: ${responseText}`,
    );
  }
}

export async function createForthLead(lead: ForthLead) {
  const apiKey = await getForthAccessToken();
  const estimatedDebtAmount = debtAmountEstimate(lead.debtAmount);
  const payload = {
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    phone_number: lead.phone,
    state: lead.stateOfResidence,
    data_source_id: contactDataSourceId(lead.landingPage),
    ...(estimatedDebtAmount ? { total_debt: estimatedDebtAmount } : {}),
    source: process.env.FORTH_LEAD_SOURCE ?? "River Relief Website",
    campaign: process.env.FORTH_LEAD_CAMPAIGN ?? "Website Leads",
    ...(process.env.FORTH_CAMPAIGN_ID
      ? { campaign_id: process.env.FORTH_CAMPAIGN_ID }
      : {}),
    notes: leadNote(lead),
    customs: contactCustoms(lead),
  };

  const response = await fetch(`${FORTH_API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Forth lead creation failed with ${response.status}: ${responseText}`,
    );
  }

  const data = (await response
    .json()
    .catch(() => ({}))) as ForthCreateContactResponse;
  const contactId =
    data.response?.contact_id ??
    data.response?.id ??
    data.contact_id ??
    data.id ??
    null;

  if (contactId && shouldCreateDebtRecords()) {
    try {
      await createForthDebt(apiKey, String(contactId), lead);
    } catch (error) {
      console.error(error);
    }
  }

  return { contactId: contactId ? String(contactId) : null };
}
