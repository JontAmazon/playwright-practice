const { test, expect } = require('@playwright/test');
const LoginPage = require('./LoginPage');

test('Test Case 1: Log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(page.getByText('Log Out')).toBeVisible();
});
