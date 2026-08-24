const FORTH_API_BASE_URL =
  process.env.FORTH_API_BASE_URL ?? "https://api.forthcrm.com/v1";
const FORTH_HOME_POST_URL =
  process.env.FORTH_HOME_POST_URL ??
  "https://login.forthcrm.com/post/4898492146f1f1ffd916dd181e7a42bec35b09d2/";
const FORTH_CONTACT_POST_URL =
  process.env.FORTH_CONTACT_POST_URL ??
  "https://login.forthcrm.com/post/2337089719f85c02b5381b45b030a2eb35a1bc7b/";

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

function extractContactIds(data) {
  const ids = new Set();

  function walk(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    for (const [key, child] of Object.entries(value)) {
      if (
        /^(id|contact_id)$/i.test(key) &&
        (typeof child === "string" || typeof child === "number")
      ) {
        ids.add(String(child));
      }

      walk(child);
    }
  }

  walk(data);

  return [...ids];
}

async function postDataSource(url, fields) {
  const postUrl = new URL(url);

  for (const [fieldName, value] of new URLSearchParams(fields).entries()) {
    postUrl.searchParams.set(fieldName, value);
  }

  const response = await fetch(postUrl, { method: "POST" });
  const responseText = await response.text();

  assert(response.ok, `Data source post failed with ${response.status}`);

  return responseText.match(/Success:(\d+)/)?.[1] ?? null;
}

async function findContactByPhone(apiKey, phone) {
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const response = await fetch(
      `${FORTH_API_BASE_URL}/contacts/search_by_phone/${phone}`,
      { headers: { "Api-Key": apiKey } },
    );
    const data = await response.json();
    const [contactId] = extractContactIds(data);

    if (response.ok && contactId) {
      return contactId;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  return null;
}

async function readContact(apiKey, contactId) {
  const response = await fetch(`${FORTH_API_BASE_URL}/contacts/${contactId}`, {
    headers: { "Api-Key": apiKey },
  });
  const data = await response.json();

  assert(response.ok, `Contact read failed with ${response.status}`);

  return data;
}

async function deleteContact(apiKey, contactId) {
  const response = await fetch(`${FORTH_API_BASE_URL}/contacts/${contactId}`, {
    headers: { "Api-Key": apiKey },
    method: "DELETE",
  });

  assert(response.ok, `Contact delete failed with ${response.status}`);
}

async function main() {
  const apiKey = await getForthApiKey();
  const timestamp = Date.now();
  const createdIds = [];
  const homePhone = `55549${String(timestamp).slice(-5)}`;
  const contactPhone = `55559${String(timestamp).slice(-5)}`;

  try {
    await postDataSource(FORTH_HOME_POST_URL, {
      EmailAddress: `riverrelief.live.home.4.9+${timestamp}@example.com`,
      Email: `riverrelief.live.home.4.9+${timestamp}@example.com`,
      email: `riverrelief.live.home.4.9+${timestamp}@example.com`,
      FirstName: "Live",
      first_name: "Live",
      HomePhone: homePhone,
      How_much_total_debt_are_you_in: "$30,000 - $50,000",
      LastName: "Home49",
      last_name: "Home49",
      Net_Income: "$3,000 - $5,000",
      Phone: homePhone,
      State: "Florida",
    });
    await postDataSource(FORTH_CONTACT_POST_URL, {
      EmailAddress: `riverrelief.live.contact.4.9+${timestamp}@example.com`,
      Email: `riverrelief.live.contact.4.9+${timestamp}@example.com`,
      email: `riverrelief.live.contact.4.9+${timestamp}@example.com`,
      FirstName: "Live",
      first_name: "Live",
      HomePhone: contactPhone,
      LastName: "Contact49",
      last_name: "Contact49",
      Phone: contactPhone,
      Tell_us_more: "Live 4.9 contact form data-source smoke test note.",
    });

    for (const phone of [homePhone, contactPhone]) {
      const contactId = await findContactByPhone(apiKey, phone);

      assert(contactId, `Could not find posted contact for phone ${phone}`);
      createdIds.push(contactId);

      const contact = await readContact(apiKey, contactId);
      const contactText = JSON.stringify(contact);

      assert(
        contactText.includes(phone),
        `Read-back contact ${contactId} missing phone ${phone}`,
      );
    }

    console.log(
      `Live Forth data-source smoke test passed for contacts ${createdIds.join(
        ", ",
      )}.`,
    );
  } finally {
    for (const contactId of createdIds) {
      await deleteContact(apiKey, contactId);
      console.log(`Deleted live smoke-test contact ${contactId}.`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
