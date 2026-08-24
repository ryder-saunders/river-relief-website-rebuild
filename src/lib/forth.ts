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

const defaultPostUrls = {
  contact:
    "https://login.forthcrm.com/post/2337089719f85c02b5381b45b030a2eb35a1bc7b/",
  home: "https://login.forthcrm.com/post/4898492146f1f1ffd916dd181e7a42bec35b09d2/",
} as const;

function cleanValue(value: string | undefined) {
  const clean = value?.trim();

  return clean || undefined;
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
  appendIfPresent(payload, "Email", lead.email);
  appendIfPresent(payload, "email", lead.email);
  appendIfPresent(payload, "Email_Address", lead.email);
  appendIfPresent(payload, "email_address", lead.email);
  appendIfPresent(payload, "emailAddress", lead.email);
  appendIfPresent(payload, "HomePhone", lead.phone);
  appendIfPresent(payload, "Phone", lead.phone);

  if (lead.landingPage.startsWith("/contact")) {
    appendIfPresent(payload, "Tell_us_more", lead.tellUsMore);

    return payload;
  }

  appendIfPresent(payload, "How_much_total_debt_are_you_in", lead.debtAmount);
  appendIfPresent(payload, "State", lead.stateOfResidence);
  appendIfPresent(payload, "state", lead.stateOfResidence);
  appendIfPresent(payload, "Net_Income", lead.monthlyTakeHomePay);
  appendIfPresent(
    payload,
    "How_much_is_your_monthly_take_home_pay",
    lead.monthlyTakeHomePay,
  );

  return payload;
}

export async function createForthLead(lead: ForthLead) {
  const postUrl = new URL(postUrlForLead(lead));
  const payload = leadPayload(lead);

  for (const [fieldName, value] of payload.entries()) {
    postUrl.searchParams.set(fieldName, value);
  }

  const response = await fetch(postUrl, {
    method: "POST",
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      `Forth data source post failed with ${response.status}: ${responseText}`,
    );
  }

  return { contactId: null };
}
