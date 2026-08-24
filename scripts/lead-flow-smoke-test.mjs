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
      debtAmount: "$30,000 - $50,000",
      state: "Florida",
      combineDebt: "Yes",
      monthlyTakeHomePay: "$3,000 - $5,000",
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
    expectsRedirect: true,
    values: {
      debtAmount: "$0 - $30,000",
      state: "Texas",
      combineDebt: "No",
      monthlyTakeHomePay: "$0 - $3,000",
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
    expectsRedirect: true,
    values: {
      debtAmount: "$50,000+",
      state: "California",
      combineDebt: "Yes",
      monthlyTakeHomePay: "$7,500+",
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
        FORTH_FILE_TYPE_ID: "1",
        FORTH_LEAD_CAMPAIGN: "Website Leads Test",
        FORTH_LEAD_SOURCE: "River Relief Website Test",
        FORTH_STAGE_ID: "50518",
        FORTH_STATUS_ID: "999001",
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
    .getByRole("button", { name: values.debtAmount, exact: true })
    .click();

  await form.getByLabel("Select your state").selectOption(values.state);

  await form
    .getByRole("button", { name: values.combineDebt, exact: true })
    .click();
  await form
    .getByRole("button", { name: values.monthlyTakeHomePay, exact: true })
    .click();

  await form
    .getByRole("textbox", { name: "First Name", exact: true })
    .fill(values.firstName);
  await form
    .getByRole("textbox", { name: "Last Name", exact: true })
    .fill(values.lastName);
  await form.getByRole("button", { name: "Next", exact: true }).click();

  await form
    .getByRole("textbox", { name: "Email", exact: true })
    .fill(values.email);
  await form.getByRole("button", { name: "Next", exact: true }).click();

  await form
    .getByRole("textbox", { name: "Phone", exact: true })
    .fill(values.phone);
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

async function testContactForm(page) {
  await page.goto(`${APP_ORIGIN}/contact`, { waitUntil: "networkidle" });
  const form = page
    .locator("form")
    .filter({ has: page.getByRole("heading", { name: "Send a quick note." }) })
    .first();

  await form
    .getByRole("textbox", { name: "First name", exact: true })
    .fill("Smoke");
  await form
    .getByRole("textbox", { name: "Last name", exact: true })
    .fill("Contact");
  await form
    .getByRole("textbox", { name: "Email", exact: true })
    .fill("smoke.contact@example.com");
  await form
    .getByRole("textbox", { name: "Phone", exact: true })
    .fill("(555) 777-8888");
  await form
    .getByRole("textbox", { name: "Tell Us More", exact: true })
    .fill("This is long-form contact page text only.");

  await Promise.all([
    page.waitForURL("**/book-consultation", { timeout: 10_000 }),
    form.getByRole("button", { name: "Send Message" }).click(),
  ]);
}

async function testUiOptions(page) {
  const debtAmounts = ["$0 - $30,000", "$30,000 - $50,000", "$50,000+"];
  const combineOptions = ["Yes", "No"];
  const monthlyTakeHomePayOptions = [
    "$0 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $7,500",
    "$7,500+",
  ];

  for (const debtAmount of debtAmounts) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: debtAmount, exact: true }).click();
    assert(
      await page
        .getByRole("heading", {
          name: "What is your State of Residence?",
        })
        .isVisible(),
      `${debtAmount} did not advance to state step`,
    );
  }

  for (const combineOption of combineOptions) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page
      .getByRole("button", { name: "$30,000 - $50,000", exact: true })
      .click();
    await page.getByLabel("Select your state").selectOption("Florida");
    await page
      .getByRole("button", { name: combineOption, exact: true })
      .click();
    assert(
      await page
        .getByRole("heading", {
          name: "What's your monthly take-home pay?",
        })
        .isVisible(),
      `${combineOption} did not advance to monthly take-home pay step`,
    );
  }

  for (const monthlyTakeHomePay of monthlyTakeHomePayOptions) {
    await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
    await page
      .getByRole("button", { name: "$30,000 - $50,000", exact: true })
      .click();
    await page.getByLabel("Select your state").selectOption("Florida");
    await page.getByRole("button", { name: "Yes", exact: true }).click();
    await page
      .getByRole("button", { name: monthlyTakeHomePay, exact: true })
      .click();
    assert(
      await page
        .getByRole("heading", {
          name: "What is your name?",
        })
        .isVisible(),
      `${monthlyTakeHomePay} did not advance to name step`,
    );
  }

  await page.goto(`${APP_ORIGIN}/qualify`, { waitUntil: "networkidle" });
  await page
    .getByRole("button", { name: "$30,000 - $50,000", exact: true })
    .click();

  const stateOptions = await page
    .getByLabel("Select your state")
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
    combineDebt: "Yes",
    consent: true,
    debtAmount: "$30,000 - $50,000",
    email: "api.smoke@example.com",
    firstName: "Api",
    landingPage: "/qualify",
    lastName: "Smoke",
    monthlyTakeHomePay: "$3,000 - $5,000",
    phone: "(555) 111-2222",
    stateOfResidence: "Florida",
    tellUsMore: "",
    website: "",
  };
  const validContactLead = {
    email: "api.contact@example.com",
    firstName: "Api",
    formType: "contact",
    landingPage: "/contact",
    lastName: "Contact",
    phone: "(555) 111-9999",
    tellUsMore: "Contact API long-form note.",
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
    (await postLead(validContactLead)).status === 200,
    "Valid contact API lead failed",
  );
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
      if (
        message.type() === "error" &&
        !message.text().includes("requestStorageAccess: Permission denied")
      ) {
        consoleErrors.push(message.text());
      }
    });

    await testUiOptions(page);

    for (const scenario of formScenarios) {
      await testFormScenario(page, scenario);
    }
    await testContactForm(page);

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
      contactPosts.length === 7,
      `Expected 7 contact posts, saw ${contactPosts.length}`,
    );
    assert(
      debtPosts.length === 5,
      `Expected 5 debt posts, saw ${debtPosts.length}`,
    );

    for (const [index, request] of contactPosts.entries()) {
      const customs = customsById(request.body);
      const isContactOnly = request.body.data_source_id === "148362";
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
      assert(
        request.body.data_source_id,
        `Contact post ${index} missing data_source_id`,
      );
      assert(
        request.body.file_type === "1",
        `Contact post ${index} missing Forth file type`,
      );
      assert(
        request.body.stageID === "50518",
        `Contact post ${index} missing River Relief Sales stage`,
      );
      assert(
        request.body.statusID === "999001",
        `Contact post ${index} missing configured Forth status`,
      );
      assert(
        !request.body.total_debt,
        `Contact post ${index} should not include standard total_debt`,
      );
      assert(
        !customs["749411"],
        `Contact post ${index} should not include estimated debt custom`,
      );
      assert(
        !customs["750771"],
        `Contact post ${index} should not include unsecured balance custom`,
      );
      assert(
        !customs["749414"],
        `Contact post ${index} should not include hardship custom`,
      );
      assert(
        !customs["760271"],
        `Contact post ${index} should not include State Qualification custom`,
      );
      assert(
        !customs["749418"],
        `Contact post ${index} should not include lead type custom`,
      );
      assert(
        !customs["750532"],
        `Contact post ${index} should not include source custom`,
      );
      assert(
        !customs["750639"],
        `Contact post ${index} should not include lead source custom`,
      );
      assert(
        !customs["760267"],
        `Contact post ${index} should not include struggling-to-pay custom`,
      );
      assert(
        !customs["774881"],
        `Contact post ${index} should not include campaign custom`,
      );

      if (isContactOnly) {
        assert(
          !request.body.state,
          `Contact post ${index} should not include state`,
        );
        assert(
          !request.body.address,
          `Contact post ${index} should not include address`,
        );
        assert(
          !customs["750801"],
          `Contact post ${index} should not include debt custom`,
        );
        assert(
          !customs["750765"],
          `Contact post ${index} should not include Net Income custom`,
        );
        assert(
          customs["750868"]?.includes("long-form") ||
            customs["750868"]?.includes("Contact API long-form note."),
          `Contact post ${index} missing contact Tell Us More text`,
        );
      } else {
        assert(request.body.state, `Contact post ${index} missing state`);
        assert(
          !request.body.address,
          `Contact post ${index} should not include address placeholders`,
        );
        assert(customs["750801"], `Contact post ${index} missing debt custom`);
        assert(
          customs["750765"],
          `Contact post ${index} missing Net Income custom`,
        );
        assert(
          !customs["750868"],
          `Contact post ${index} should not include Tell Us More`,
        );
      }
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
