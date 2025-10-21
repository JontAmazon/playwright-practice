# Practicing Playwright end-to-end UI testing on this virtual bank demo site:
https://parabank.parasoft.com/parabank/index.htm

## TESTS COVER:
- User login
- Registering a new user
- Viewing account overview
- Opening a new bank account
- Transferring funds
- Contacting customer support

## FEATURES:
  - LoginPage: a basic Page Object Model abstraction to handle login.
  - Fixture for easy login.
  - Fixture for automatically logging any client-side JavaScript console errors and warnings, even if the test passes.
  - Utility functions for:
    - Parsing account overview table data
    - Retrieving account balances

## HOW TO RUN:
- Prerequisite: Install Node.js (https://nodejs.org/)
1. git clone https://github.com/JontAmazon/playwright.git
2. cd to repo
3. npm install
4. npx playwright test tests -ui
5. npx playwright show-report

Before you run the tests:
You’ll need to manually register a new account on Parabank.
(Accounts are frequently wiped from the site.)
You can use any fake data, except for:
- Username: JohnSmith42
- Password: password
