type ForthLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tellUsMore: string;
  creditRating?: string;
  monthlyPayment?: string;
  totalCreditCardDebt?: string;
  stateOfResidence?: string;
  debtType?: string;
  debtAmount?: string;
  paymentStruggleDuration?: string;
  combineDebt?: string;
  monthlyTakeHomePay?: string;
  consent: boolean;
  landingPage: string;
  submittedAt: string;
};

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

const defaultPostUrls = {
  contact:
    "https://login.forthcrm.com/post/2337089719f85c02b5381b45b030a2eb35a1bc7b/",
  home: "https://login.forthcrm.com/post/4898492146f1f1ffd916dd181e7a42bec35b09d2/",
} as const;

const forthFields = {
  netIncome: process.env.FORTH_FIELD_NET_INCOME_ID ?? "750765",
  stateQualification:
    process.env.FORTH_FIELD_STATE_QUALIFICATION_ID ?? "760271",
} as const;

const FORTH_API_BASE_URL =
  process.env.FORTH_API_BASE_URL ?? "https://api.forthcrm.com/v1";

let cachedToken: { value: string; expiresAt: number } | undefined;

function cleanValue(value: string | undefined) {
  const clean = value?.trim();

  return clean || undefined;
}

function hasForthApiCredentials() {
  return Boolean(
    process.env.FORTH_CLIENT_ID && process.env.FORTH_CLIENT_SECRET,
  );
}

async function getForthAccessToken() {
  const now = Date.now();

  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.value;
  }

  const response = await fetch(`${FORTH_API_BASE_URL}/auth/token`, {
    body: JSON.stringify({
      client_id: process.env.FORTH_CLIENT_ID,
      client_secret: process.env.FORTH_CLIENT_SECRET,
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
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

function appendIfPresent(
  payload: URLSearchParams,
  fieldName: string,
  value: string | undefined,
) {
  const clean = cleanValue(value);

  if (clean) {
    payload.set(fieldName, clean);
  }
}

function postUrlForLead(lead: ForthLead) {
  if (lead.landingPage.startsWith("/contact")) {
    return process.env.FORTH_CONTACT_POST_URL ?? defaultPostUrls.contact;
  }

  return process.env.FORTH_HOME_POST_URL ?? defaultPostUrls.home;
}

function leadPayload(lead: ForthLead) {
  const payload = new URLSearchParams();

  appendIfPresent(payload, "FirstName", lead.firstName);
  appendIfPresent(payload, "first_name", lead.firstName);
  appendIfPresent(payload, "LastName", lead.lastName);
  appendIfPresent(payload, "last_name", lead.lastName);
  appendIfPresent(payload, "EmailAddress", lead.email);
  appendIfPresent(payload, "HomePhone", lead.phone);
  appendIfPresent(payload, "Phone", lead.phone);

  if (lead.landingPage.startsWith("/contact")) {
    appendIfPresent(payload, "Tell_us_more", lead.tellUsMore);

    return payload;
  }

  appendIfPresent(payload, "How_much_total_debt_are_you_in", lead.debtAmount);
  appendIfPresent(payload, "State", lead.stateOfResidence);
  appendIfPresent(payload, "Net_Income", lead.monthlyTakeHomePay);

  return payload;
}

function custom(fieldId: string, value: string | undefined) {
  const clean = cleanValue(value);

  if (!clean) {
    return null;
  }

  return { field_id: fieldId, value: [clean] };
}

function patchPayload(lead: ForthLead) {
  const customs = [
    custom(forthFields.netIncome, lead.monthlyTakeHomePay),
    custom(forthFields.stateQualification, lead.stateOfResidence),
  ].filter((field) => field !== null);

  return {
    email: lead.email,
    ...(lead.stateOfResidence ? { state: lead.stateOfResidence } : {}),
    ...(customs.length > 0 ? { customs } : {}),
  };
}

async function patchCreatedContact(contactId: string, lead: ForthLead) {
  if (!hasForthApiCredentials()) {
    return;
  }

  const response = await fetch(`${FORTH_API_BASE_URL}/contacts/${contactId}`, {
    body: JSON.stringify(patchPayload(lead)),
    headers: {
      "Api-Key": await getForthAccessToken(),
      "Content-Type": "application/json",
    },
    method: "PUT",
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      `Forth contact patch failed with ${response.status}: ${responseText}`,
    );
  }
}

export async function createForthLead(lead: ForthLead) {
  const postUrl = new URL(postUrlForLead(lead));
  const payload = leadPayload(lead);

  for (const [fieldName, value] of payload.entries()) {
    postUrl.searchParams.set(fieldName, value);
  }

  const response = await fetch(postUrl, { method: "POST" });
  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      `Forth data source post failed with ${response.status}: ${responseText}`,
    );
  }

  const contactId = responseText.match(/Success:(\d+)/)?.[1] ?? null;

  if (contactId) {
    await patchCreatedContact(contactId, lead);
  }

  return { contactId };
}
