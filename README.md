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
  - Daily Job via GitHub Actions that executes all tests and commits the test result to a separate branch.
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
4. npx playwright test tests --workers=1

Note: Parabank continuously wipes accounts, therefore the user registration test is run first by using workers=1 and prefixing its test name with "0": 0-register-new-user.spec.js
