const { testWithLogin, expect } = require('../fixtures/fixtures');

testWithLogin('Login test', async ({ loginPage }) => {
  await loginPage.login();
  await expect(loginPage.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(loginPage.page.getByText('Log Out')).toBeVisible();
});
