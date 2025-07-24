const { test, expect } = require('@playwright/test');

test('Register new account', async ({ page }) => {
  const username = 'user' + Date.now();
  const password = 'password';
  console.log(username);
  
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  
  await page.fill('#customer\\.firstName', 'John');
  await page.fill('#customer\\.lastName', 'Smith');
  await page.fill('#customer\\.address\\.street', 'Street X');
  await page.fill('#customer\\.address\\.city', 'City X');
  await page.fill('#customer\\.address\\.state', 'State X');
  await page.fill('#customer\\.address\\.zipCode', '12345');
  await page.fill('#customer\\.phoneNumber', '1234567890');
  await page.fill('#customer\\.ssn', '123456789');
  await page.fill('#customer\\.username', username);
  await page.fill('#customer\\.password', password);
  await page.fill('#repeatedPassword', password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Your account was created')).toBeVisible();
  await expect(page.getByText('You are now logged in')).toBeVisible();

  await page.getByRole('link', { name: 'Log Out' }).click();

  // Re-login to verify
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await expect(page.getByText('Log Out')).toBeVisible();
});
