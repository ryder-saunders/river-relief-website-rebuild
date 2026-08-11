const FORTH_API_BASE_URL =
  process.env.FORTH_API_BASE_URL ?? "https://api.forthcrm.com/v1";

function requiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function getForthApiKey() {
  const response = await fetch(`${FORTH_API_BASE_URL}/auth/token`, {
    body: JSON.stringify({
      client_id: requiredEnv("FORTH_CLIENT_ID"),
      client_secret: requiredEnv("FORTH_CLIENT_SECRET"),
    }),
    headers: { "content-type": "application/json" },
    method: "POST",
  });
  const data = await response.json();
  const apiKey =
    data?.response?.api_key ??
    data?.api_key ??
    data?.access_token ??
    data?.token;

  assert(response.ok && apiKey, `Forth auth failed with ${response.status}`);

  return apiKey;
}

function extractContactId(data) {
  const ids = [];

  function walk(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    for (const [key, child] of Object.entries(value)) {
      if (
        /^(id|contact_id)$/i.test(key) &&
        (typeof child === "string" || typeof child === "number")
      ) {
        ids.push(String(child));
      }

      walk(child);
    }
  }

  walk(data);

  return ids[0] ?? null;
}

function customsById(contact) {
  return Object.fromEntries(
    (contact?.response?.customs ?? []).map((item) => [
      String(item.field_id),
      Array.isArray(item.value)
        ? item.value.join(" ")
        : String(item.value ?? ""),
    ]),
  );
}

async function main() {
  const apiKey = await getForthApiKey();
  const source = process.env.FORTH_LEAD_SOURCE ?? "River Relief Website";
  const campaign = process.env.FORTH_LEAD_CAMPAIGN ?? "Website Leads";
  const dataSourceId =
    process.env.FORTH_QUALIFY_DATA_SOURCE_ID ??
    process.env.FORTH_DEFAULT_DATA_SOURCE_ID ??
    "148284";
  const timestamp = Date.now();
  const email = `riverrelief.live.smoke+${timestamp}@example.com`;
  let contactId;

  const payload = {
    campaign,
    customs: [
      { field_id: "750801", value: ["$30,000 - $50,000"] },
      { field_id: "754651", value: ["$30,000 - $50,000"] },
      { field_id: "750868", value: ["Live smoke test note"] },
      {
        field_id: "749414",
        value: [
          "Debt type: Credit Card Debt\nPayment struggle duration: 1-3 years\nConsent: Yes\nLanding page: /qualify",
        ],
      },
      { field_id: "749418", value: ["debt-consolidation-intake"] },
      { field_id: "750532", value: [source] },
      { field_id: "774881", value: [campaign] },
    ],
    data_source_id: dataSourceId,
    email,
    first_name: "RiverRelief",
    last_name: "LiveSmoke",
    notes:
      "River Relief website lead\nDebt type: Credit Card Debt\nDebt amount: $30,000 - $50,000\nPayment struggle duration: 1-3 years\nLanding page: /qualify\nConsent: Yes",
    phone_number: "5558889999",
    source,
    state: "Florida",
  };

  try {
    const createResponse = await fetch(`${FORTH_API_BASE_URL}/contacts`, {
      body: JSON.stringify(payload),
      headers: { "Api-Key": apiKey, "content-type": "application/json" },
      method: "POST",
    });
    const createData = await createResponse.json();
    contactId = extractContactId(createData);

    assert(
      createResponse.ok && contactId,
      `Forth contact creation failed with ${createResponse.status}`,
    );

    const readResponse = await fetch(
      `${FORTH_API_BASE_URL}/contacts/${contactId}`,
      {
        headers: { "Api-Key": apiKey },
      },
    );
    const contact = await readResponse.json();
    const contactText = JSON.stringify(contact);
    const customs = customsById(contact);

    assert(
      readResponse.ok,
      `Forth contact read failed with ${readResponse.status}`,
    );
    assert(contactText.includes(email), "Read-back contact is missing email");
    assert(
      contactText.includes("5558889999"),
      "Read-back contact is missing phone",
    );
    assert(
      customs["750801"]?.includes("$30,000 - $50,000"),
      "Read-back contact is missing debt amount custom field",
    );
    assert(
      customs["754651"]?.includes("$30,000 - $50,000"),
      "Read-back contact is missing total credit card debt custom field",
    );
    assert(
      customs["750868"]?.includes("Live smoke test note"),
      "Read-back contact is missing Tell Us More custom field",
    );
    assert(
      customs["749414"]?.includes("Credit Card Debt") &&
        customs["749414"]?.includes("1-3 years"),
      "Read-back contact is missing hardship custom field",
    );
    assert(
      customs["749418"]?.includes("debt-consolidation-intake"),
      "Read-back contact is missing lead type custom field",
    );
    assert(
      customs["750532"]?.includes(source),
      "Read-back contact is missing source custom field",
    );
    assert(
      customs["774881"]?.includes(campaign),
      "Read-back contact is missing campaign custom field",
    );

    console.log(`Live Forth smoke test passed for contact ${contactId}.`);
  } finally {
    if (contactId) {
      const deleteResponse = await fetch(
        `${FORTH_API_BASE_URL}/contacts/${contactId}`,
        {
          headers: { "Api-Key": apiKey },
          method: "DELETE",
        },
      );

      assert(
        deleteResponse.ok,
        `Created test contact ${contactId}, but cleanup delete failed with ${deleteResponse.status}`,
      );
      console.log(`Deleted live smoke-test contact ${contactId}.`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
