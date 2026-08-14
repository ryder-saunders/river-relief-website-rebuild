import { spawn } from "node:child_process";
import http from "node:http";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const APP_ORIGIN = process.env.LEAD_TEST_APP_ORIGIN ?? "http://127.0.0.1:3037";
const MOCK_FORTH_ORIGIN =
  process.env.LEAD_TEST_MOCK_FORTH_ORIGIN ?? "http://127.0.0.1:4317";
const MOCK_FORTH_BASE_URL = `${MOCK_FORTH_ORIGIN}/v1`;

const formScenarios = [
  {
    name: "qualify funnel",
    path: "/qualify",
    formIndex: 0,
    expectsRedirect: true,
    values: {
      debtType: "Credit Card Debt",
      debtAmount: "$30,000 - $50,000",
      duration: "6 Months - 1 Year",
      state: "Florida",
      firstName: "Smoke",
      lastName: "Qualify",
      email: "smoke.qualify@example.com",
      phone: "(555) 222-3333",
      tellUsMore: "Interested in lowering monthly pressure.",
    },
  },
  {
    name: "homepage hero",
    path: "/",
    formIndex: 0,
    expectsRedirect: false,
    values: {
      debtType: "Personal Loan Debt",
      debtAmount: "$0 - $30,000",
      duration: "Very Recently",
      state: "Texas",
      firstName: "Smoke",
      lastName: "Hero",
      email: "smoke.hero@example.com",
      phone: "555.333.4444",
      tellUsMore: "Would like a simple follow-up call.",
    },
  },
  {
    name: "homepage intake section",
    path: "/",
    formIndex: 1,
    expectsRedirect: false,
    values: {
      debtType: "Another Kind Of Debt",
      debtAmount: "$50,000+",
      duration: "3+ Years",
      state: "California",
      firstName: "Smoke",
      lastName: "Intake",
      email: "smoke.intake@example.com",
      phone: "+1 (555) 444-5555",
      tellUsMore: "Need help comparing several accounts.",
    },
  },
];

const expectedStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const requests = [];
const children = [];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function startMockForth() {
  const server = http.createServer((request, response) => {
    const chunks = [];

    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => {
      const bodyText = Buffer.concat(chunks).toString("utf8");
      let body;

      try {
        body = bodyText ? JSON.parse(bodyText) : null;
      } catch {
        body = bodyText;
      }

      requests.push({
        body,
        headers: request.headers,
        method: request.method,
        url: request.url,
      });
      response.setHeader("content-type", "application/json");

      if (request.method === "POST" && request.url === "/v1/auth/token") {
        response.end(
          JSON.stringify({
            response: { api_key: "mock-api-key", expires_in: 86_400 },
            status: { code: 200 },
          }),
        );
        return;
      }

      if (request.method === "POST" && request.url === "/v1/contacts") {
        response.end(
          JSON.stringify({
            response: { id: 987_654_321 },
            status: { code: 200 },
          }),
        );
        return;
      }

      if (request.method === "POST" && request.url === "/v1/debts") {
        response.end(
          JSON.stringify({
            response: { id: 123_456_789 },
            status: { code: 200 },
          }),
        );
        return;
      }

      response.statusCode = 404;
      response.end(JSON.stringify({ error: "not found" }));
    });
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(new URL(MOCK_FORTH_ORIGIN).port, "127.0.0.1", () =>
      resolve(server),
    );
  });
}

function startNextDev() {
  const child = spawn(
    "npm",
    ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3037"],
    {
      env: {
        ...process.env,
        FORTH_API_BASE_URL: MOCK_FORTH_BASE_URL,
        FORTH_CLIENT_ID: "test-client-id",
        FORTH_CLIENT_SECRET: "test-client-secret",
        FORTH_LEAD_CAMPAIGN: "Website Leads Test",
        FORTH_LEAD_SOURCE: "River Relief Website Test",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  children.push(child);
  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));

  return child;
}

async function waitForApp() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(APP_ORIGIN);

      if (response.ok) {
        return;
      }
    } catch {
      // The dev server is still starting.
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for ${APP_ORIGIN}`);
}

async function completeSurvey(form, values) {
  await form
    .getByRole("button", { name: values.debtType, exact: true })
    .click();
  await form
    .getByRole("button", { name: values.debtAmount, exact: true })
    .click();
  await form
    .getByRole("button", { name: values.duration, exact: true })
    .click();

  await form.getByLabel("State of Residence*").selectOption(values.state);

  await form
    .getByRole("textbox", { name: "First name", exact: true })
    .fill(values.firstName);
  await form
    .getByRole("textbox", { name: "Last name", exact: true })
    .fill(values.lastName);
  await form
    .getByRole("textbox", { name: "Email", exact: true })
    .fill(values.email);
  await form
    .getByRole("textbox", { name: "Phone", exact: true })
    .fill(values.phone);
  await form
    .getByRole("textbox", { name: "Tell Us More", exact: true })
    .fill(values.tellUsMore);
  await form.getByRole("checkbox").check();
}

function customsById(payload) {
  return Object.fromEntries(
    (payload.customs ?? []).map((item) => [item.field_id, item.value?.[0]]),
  );
}

async function testFormScenario(page, scenario) {
  await page.goto(`${APP_ORIGIN}${scenario.path}`, {
    waitUntil: "networkidle",
  });
  const form = page.locator("form").nth(scenario.formIndex);
  await completeSurvey(form, scenario.values);

  if (scenario.expectsRedirect) {
    await Promise.all([
      page.waitForURL("**/book-consultation", { timeout: 10_000 }),
      form.getByRole("button", { name: "Send My Options" }).click(),
    ]);
    assert(
      await page
        .getByRole("heading", {
          name: "Choose a time that gives your review a real next step.",
        })
        .isVisible(),
      `${scenario.name} did not show the booking page`,
    );
    return;
  }

  await form.getByRole("button", { name: "Send My Options" }).click();
  await page
    .getByText("Your review was received.")
    .waitFor({ state: "visible", timeout: 10_000 });
}

async function testUiOptions(page) {
  const debtTypes = [
    "Credit Card Debt",
    "Personal Loan Debt",
    "Another Kind Of Debt",
  ];
  const debtAmounts = ["$0 - $30,000", "$30,000 - $50,000", "$50,000+"];
  const durations = [
    "Very Recently",
    "6 Months - 1 Year",
    "1-3 years",
    "3+ Years",
  ];

  for (const debtType of debtTypes) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: debtType, exact: true }).click();
    assert(
      await page
        .getByRole("heading", { name: "How Much Debt Do You Currently Have?" })
        .isVisible(),
      `${debtType} did not advance to amount step`,
    );
  }

  for (const debtAmount of debtAmounts) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page
      .getByRole("button", { name: "Credit Card Debt", exact: true })
      .click();
    await page.getByRole("button", { name: debtAmount, exact: true }).click();
    assert(
      await page
        .getByRole("heading", {
          name: "How Long Have You Been Struggling With Payments?",
        })
        .isVisible(),
      `${debtAmount} did not advance to timing step`,
    );
  }

  for (const duration of durations) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page
      .getByRole("button", { name: "Credit Card Debt", exact: true })
      .click();
    await page
      .getByRole("button", { name: "$30,000 - $50,000", exact: true })
      .click();
    await page.getByRole("button", { name: duration, exact: true }).click();
    assert(
      await page
        .getByRole("heading", {
          name: "You Qualify For Debt Relief Options!",
        })
        .isVisible(),
      `${duration} did not advance to state step`,
    );
  }

  const stateOptions = await page
    .getByLabel("State of Residence*")
    .locator("option")
    .evaluateAll((options) => options.map((option) => option.textContent));

  assert(stateOptions.length === 51, "State select should include 50 states");
  assert(
    expectedStates.every((state) => stateOptions.includes(state)),
    "State select is missing one or more states",
  );
}

async function testApiValidation() {
  const validLead = {
    consent: true,
    debtAmount: "$30,000 - $50,000",
    debtType: "Credit Card Debt",
    email: "api.smoke@example.com",
    firstName: "Api",
    landingPage: "/qualify",
    lastName: "Smoke",
    paymentStruggleDuration: "6 Months - 1 Year",
    phone: "(555) 111-2222",
    stateOfResidence: "Florida",
    tellUsMore: "API smoke test note",
    website: "",
  };

  const postLead = async (body) => {
    const response = await fetch(`${APP_ORIGIN}/api/leads`, {
      body: JSON.stringify(body),
      headers: { "content-type": "application/json" },
      method: "POST",
    });

    return { body: await response.json(), status: response.status };
  };

  assert((await postLead(validLead)).status === 200, "Valid API lead failed");
  assert(
    (await postLead({ ...validLead, phone: "" })).status === 400,
    "Missing phone should fail",
  );
  assert(
    (await postLead({ ...validLead, email: "bad-email" })).status === 400,
    "Invalid email should fail",
  );
  assert(
    (await postLead({ ...validLead, consent: false })).status === 400,
    "Unchecked consent should fail",
  );
  assert(
    (await postLead({ ...validLead, website: "bot-fill" })).status === 200,
    "Honeypot response should be OK",
  );
}

async function main() {
  const mockForth = await startMockForth();
  const nextDev = startNextDev();

  try {
    await waitForApp();
    await testApiValidation();

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1366, height: 900 },
    });
    const consoleErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    await testUiOptions(page);

    for (const scenario of formScenarios) {
      await testFormScenario(page, scenario);
    }

    const mobilePage = await browser.newPage({
      viewport: { height: 844, width: 390 },
    });
    await testFormScenario(mobilePage, formScenarios[0]);
    assert(
      await mobilePage.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
      "Mobile viewport has horizontal overflow",
    );
    await mobilePage.close();
    await browser.close();

    assert(
      consoleErrors.length === 0,
      `Console errors: ${consoleErrors.join("; ")}`,
    );

    const contactPosts = requests.filter(
      (request) => request.method === "POST" && request.url === "/v1/contacts",
    );
    const debtPosts = requests.filter(
      (request) => request.method === "POST" && request.url === "/v1/debts",
    );
    assert(
      contactPosts.length === 5,
      `Expected 5 contact posts, saw ${contactPosts.length}`,
    );
    assert(
      debtPosts.length === contactPosts.length,
      `Expected ${contactPosts.length} debt posts, saw ${debtPosts.length}`,
    );

    for (const [index, request] of contactPosts.entries()) {
      const customs = customsById(request.body);
      assert(
        request.body.first_name,
        `Contact post ${index} missing first_name`,
      );
      assert(request.body.last_name, `Contact post ${index} missing last_name`);
      assert(request.body.email, `Contact post ${index} missing email`);
      assert(
        request.body.phone_number,
        `Contact post ${index} missing phone_number`,
      );
      assert(request.body.state, `Contact post ${index} missing state`);
      assert(
        request.body.data_source_id,
        `Contact post ${index} missing data_source_id`,
      );
      assert(
        request.body.total_debt,
        `Contact post ${index} missing standard total_debt`,
      );
      assert(
        customs["749411"],
        `Contact post ${index} missing estimated debt custom`,
      );
      assert(
        customs["750801"],
        `Contact post ${index} missing debt amount custom`,
      );
      assert(
        customs["750868"],
        `Contact post ${index} missing Tell Us More custom`,
      );
      assert(
        customs["750868"].length > 0,
        `Contact post ${index} missing Tell Us More value`,
      );
      assert(
        customs["749414"],
        `Contact post ${index} missing hardship custom`,
      );
      assert(
        customs["749418"] === "debt-consolidation-intake",
        `Contact post ${index} missing lead type custom`,
      );
      assert(customs["750532"], `Contact post ${index} missing source custom`);
      assert(
        customs["750639"] === "Website",
        `Contact post ${index} missing Website lead source custom`,
      );
      assert(
        customs["760267"] === "Yes",
        `Contact post ${index} missing struggling-to-pay custom`,
      );
      assert(
        customs["774881"],
        `Contact post ${index} missing campaign custom`,
      );
    }

    for (const [index, request] of debtPosts.entries()) {
      assert(request.body.client_id, `Debt post ${index} missing client_id`);
      assert(request.body.creditor, `Debt post ${index} missing creditor`);
      assert(request.body.debt_type, `Debt post ${index} missing debt_type`);
      assert(
        request.body.original_debt_amount,
        `Debt post ${index} missing original_debt_amount`,
      );
      assert(
        request.body.current_debt_amount,
        `Debt post ${index} missing current_debt_amount`,
      );
      assert(request.body.notes, `Debt post ${index} missing notes`);
    }

    console.log("Lead flow smoke test passed.");
    console.log(
      `Verified ${contactPosts.length} contact submissions and ${debtPosts.length} debt records across all forms.`,
    );
  } finally {
    mockForth.close();
    nextDev.kill("SIGTERM");
    for (const child of children) {
      if (!child.killed) {
        child.kill("SIGTERM");
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
