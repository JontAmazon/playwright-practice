/* Fixtures for login and automatic error logging in Playwright tests.

Usage:
This fixture exports:
  { test, testWithLogin, expect }
testWithLogin should be used in tests where login occurs.
test should should be used elsewhere.
*/

const { test: baseTest, expect } = require('@playwright/test');
const loginFixture = require('./fixture-login');
const errorLoggerFixture = require('./fixture-error-logger');

// To be imported in tests without login:
const test = baseTest
  .extend(errorLoggerFixture);

  // To be imported in tests with login:
const testWithLogin = test
  .extend(loginFixture);

module.exports = { test, testWithLogin, expect };
