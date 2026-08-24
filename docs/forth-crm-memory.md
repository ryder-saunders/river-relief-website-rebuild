# Forth CRM Integration Memory

Last updated: 2026-08-24

This file tracks the current working understanding of how River Relief website
lead data should land in Forth CRM. Update it when a new live Forth readback or
client confirmation changes the mapping.

## Confirmed live behavior

- The website submits leads through the server route at `/api/leads`, which
  creates Forth contacts through `POST /v1/contacts`.
- A normal-looking Forth lead is not only a contact with custom fields. It also
  has standard contact fields populated and, when debt details are known,
  related debt rows under `/contacts/{contactId}/debts`.
- Forth contact search by phone works with
  `GET /v1/contacts/search_by_phone/{phone}` and returns enough data to find
  the contact ID for readback.
- Contact readback works with `GET /v1/contacts/{contactId}`.
- Debt readback works with `GET /v1/contacts/{contactId}/debts`.
- Debt type options can be listed with `GET /v1/debts/types`.

## Website data sources

Current River Relief data-source IDs:

- `148284` = `Webform RR - Apply Now`
- `148675` = `Webform RR - Home Form`
- `148362` = `Webform RR - Contact Us`

Preferred names for easier WCB tracking:

- `WCB - Webform RR - Apply Now`
- `WCB - Webform RR - Home Form`
- `WCB - Webform RR - Contact Us`

The API key can list data sources with `GET /v1/data-sources`, but attempts to
rename data sources through `PUT` or `PATCH` returned `404`. Rename these in the
Forth UI unless a different admin endpoint is confirmed.

## Contact field mapping

The website should populate both standard contact fields and custom fields.

Standard contact fields:

- `first_name`: borrower first name
- `last_name`: borrower last name
- `email`: borrower email
- `phone_number`: borrower phone
- `state`: state of residence
- `data_source_id`: selected from landing page

Do not send the nested `address` object unless the visitor provided actual
address fields. Live 2026-08-24 probes showed that Forth rejects `address` with
state only because `address.address1` is required, and placeholder values like
`-` or `00000` should not be sent.

Custom contact fields:

- `750765` / `Net Income`: monthly take-home pay range selected in the survey
- `750801` / `How much total debt are you in`: original selected debt range
- `750868` / `Tell us more...`: contact-page long-form message only

Do not populate duplicate or summary fields from website surveys, including
`749411` / `Estimated Debt`, `749414` / `Hardship Description`, `749418` /
`Lead Type`, `750532` / `Original Data Source`, `750639` / `Lead Source`,
`750771` / `Balance of Unsecured Accounts`, `754651` / `Total Credit Card
Debt`, `760267` / `Struggling to Make Payments`, `760271` / `State
Qualification`, or `774881` / `utm_campaign`. Do not send consent values or
source URLs into Forth notes/custom summaries.

Other configured-but-not-always-present fields:

- `750644` / `Credit Rating`
- `750799` / `Whats your estimated credit rating`
- `750800` / `How much is your monthly payment`

These are only populated when the form sends those answers.

## Debt amount handling

Current survey ranges are broad. For numeric Forth fields, use a conservative
estimate:

- `$0 - $30,000` -> `30000`
- `$30,000 - $50,000` -> `40000`
- `$50,000+` -> `50000`

Do not send the numeric estimate to standard contact `total_debt`; the selected
debt range should only populate custom field `750801`.

## Debt row handling

Website leads should create a related debt record after the contact is created.
The live-verified endpoint is `POST /v1/debts`.

Required/known debt payload fields:

- `client_id`: Forth contact ID
- `creditor`: integer creditor ID
- `debt_type`: Forth debt type ID as a string
- `original_debt_amount`: numeric estimate
- `current_debt_amount`: numeric estimate
- `current_payment`: optional monthly payment when available
- `notes`: include debt type label, original website debt type, selected range,
  and payment struggle duration

Important: Forth requires `creditor` as an integer. A generic creditor was
created for website intake:

- Creditor ID `28280013`
- Creditor name `WCB Website Intake`

Important: Forth uses `debt_type`, not `debt_type_id`, when creating/updating
debt type. Sending `debt_type_id` creates/updates the debt row but leaves
`debt_type` empty.

## Debt type mapping

The current landing-page survey no longer asks debt type. Debt rows created
from website submissions should use the unknown fallback unless a future form
adds debt type back.

Previous single-select survey mapping:

- `Credit Card Debt` -> `1` / `Credit Card`
- `Personal Loan Debt` -> `2` / `Personal Loan`
- `Another Kind Of Debt` -> `195` / `Other`
- Unknown fallback -> `186` / `Unknown`

Future improvement: the survey should allow multiple debt types. When that is
implemented, create one debt row per selected debt type, or confirm with the
client/Forth admin whether one aggregate debt row is preferred.

## Live verification results

On 2026-08-14, a fake `/qualify` lead submitted through the built site was read
back from Forth and confirmed to have:

- Contact `data_source_id`: `148284`
- Contact `total_debt`: `40000.00`
- Expected custom fields populated, including `749411`, `749414`, `749418`,
  `750532`, `750639`, `750801`, `750868`, `754651`, `760267`, and `774881`
- One related debt row with:
  - Creditor `WCB Website Intake`
  - Debt type object `1` / `Credit Card`
  - Original/current debt amount `40000.00`

An earlier fake test contact was manually backfilled with the same debt-row
structure after discovering the required `creditor` and `debt_type` payload
names.

## Known limitations

- The current form still collects only one debt type. The client wants multiple
  selections later.
- Generic Forth contact search returned broad River Relief sales records and was
  not safe for bulk backfill. Only update records that are positively identified
  as website/test submissions.
- Data-source rename must be done in Forth UI unless a working admin update API
  is found.
- Existing `.env.local` values with spaces should not be shell-sourced without
  parsing or quoting; direct Node parsing was used during investigation.
