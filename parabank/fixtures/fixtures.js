/* Fixtures for login and automatic error logging in Playwright tests.

Usage:
Tests should import either "testWithLogin" or "test" depending
on whether or not they use the LoginPage functionality.
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
