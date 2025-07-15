const { test, expect } = require('@playwright/test');

test('Contact form submits successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.waitForURL('**/contact.htm*');
  await page.fill('#name', 'John Smith');
  await page.fill('#email', 'email');
  await page.fill('#phone', 'phone');
  await page.fill('#message', 'Please contact me!\nI am so lonely!');
  await page.getByRole('button', { name: 'Send to Customer Care' }).click();

  await expect(page.getByText('Thank you John Smith')).toBeVisible();
  await expect(page.getByText('A Customer Care Representative will be contacting you.')).toBeVisible();
});
