// fixtures.js
// Extends Playwright's base test to provide a custom `loginPage` fixture.
// This fixture navigates to the login page and gives tests easy access to LoginPage methods.

const { test: baseTest, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

module.exports = { test, expect };