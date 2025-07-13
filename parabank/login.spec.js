const { test, expect } = require('@playwright/test');

test('Test Case 1: Log in', async ({ page }) => {
  const BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';
  const USERNAME = `JohnSmith`;
  const PASSWORD = 'password';

  await page.goto(BASE_URL);
  await page.locator('input[name="username"]').fill(USERNAME);
  await page.locator('input[name="password"]').fill(PASSWORD);
  await page.locator('input[value="Log In"]').click();
  // After login, verify 'Accounts Overview' and 'Log Out' are visible.
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(page.getByText('Log Out')).toBeVisible();
});


/* TODO:
git repo
const LoginPage = require('./LoginPage');


*/


/* QUESTIONS:
- should I use a page object model? <-- ???

*/

