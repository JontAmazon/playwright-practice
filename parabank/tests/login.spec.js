const { test, expect } = require('../fixtures/fixtures');

test('Login test', async ({ loginPage }) => {
  await loginPage.login();
  await expect(loginPage.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(loginPage.page.getByText('Log Out')).toBeVisible();
});
