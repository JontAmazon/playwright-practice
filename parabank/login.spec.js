const { test, expect } = require('@playwright/test');
const LoginPage = require('./LoginPage');

test('Test Case 1: Log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';
  const USERNAME = `JohnSmith`;
  const PASSWORD = 'password';

  await page.goto(BASE_URL);
  await loginPage.login();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(page.getByText('Log Out')).toBeVisible();
});
