# Forth CRM Integration Memory

Last updated: 2026-08-24

This file tracks the current working understanding of how River Relief website
lead data should land in Forth CRM. Update it when a new live Forth readback or
client confirmation changes the mapping.

## Confirmed live behavior

- The website submits leads through the server route at `/api/leads`, which
  posts URL-encoded form data to Forth Data Source Post URLs.
- Data Source Post URLs apply the data source's configured file type,
  stage/status, assignment, and import-field mappings. Do not create normal
  website leads through authenticated `POST /v1/contacts`; that bypasses the
  data-source automation.
- Forth contact search by phone works with
  `GET /v1/contacts/search_by_phone/{phone}` and returns enough data to find
  the contact ID for readback.
- Contact readback works with `GET /v1/contacts/{contactId}`.

## Website data sources

Current River Relief data-source IDs:

- `148675` = `Webform RR - Home Form`
- `148362` = `Webform RR - Contact Us - NEW`

Current post URLs:

- Home: `https://login.forthcrm.com/post/4898492146f1f1ffd916dd181e7a42bec35b09d2/`
- Contact: `https://login.forthcrm.com/post/2337089719f85c02b5381b45b030a2eb35a1bc7b/`

## Contact field mapping

Post field names:

- `FirstName`: borrower first name
- `LastName`: borrower last name
- `Email`: borrower email
- `EmailAddress`: borrower email
- `HomePhone`: borrower phone
- `State`: state of residence, survey forms only
- `How_much_total_debt_are_you_in`: selected debt range, survey forms only
- `Net_Income`: monthly take-home pay range, survey forms only
- `Tell_us_more`: contact-page long-form message only

Do not send address placeholders, consent values, source URLs, generated survey
summaries, direct custom-field IDs, or duplicate debt fields. The Data Source
field maps decide which contact/custom fields these post names populate.

Live 5.1 uses the Data Source Post URLs as the source of truth. The website no
longer follows the post with an authenticated contact update; email, state, net
income, stage, and status should all come from the Forth Data Source field maps
and source settings.

## Debt amount handling

Do not create related debt rows directly from the website route. The selected
debt range should be posted only as `How_much_total_debt_are_you_in`; Forth Data
Source mappings handle the target CRM field.

## Live verification results

- 2026-08-24 screenshots of the Forth Data Source edit pages confirmed both
  Home and Contact Us sources are configured with `River Relief Sales : Ready
to Apply` stage/status. That stage/status should now be applied by the Data
  Source Post URL flow rather than sent manually through the direct contacts
  API.

## Known limitations

- Generic Forth contact search returned broad River Relief sales records and was
  not safe for bulk backfill. Only update records that are positively identified
  as website/test submissions.
- Existing `.env.local` values with spaces should not be shell-sourced without
  parsing or quoting; direct Node parsing was used during investigation.
