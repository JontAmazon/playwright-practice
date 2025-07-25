// Export loginPage, to be extended to Playwright's base test module.
// LoginPage navigates to the login page and allows test to easily log in.

const LoginPage = require('../pages/LoginPage');

module.exports = {
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
};
