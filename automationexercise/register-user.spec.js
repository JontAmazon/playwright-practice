// exercise #1: https://automationexercise.com/test_cases

const { test, expect } = require('@playwright/test');

test('Test Case 1: Register User', async ({ page }) => {
  // 1. Launch browser & 2. Navigate to URL
  await page.goto('http://automationexercise.com');

  const consentButton = page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page.locator('img[src="/static/images/home/logo.png"]')).toBeVisible();

  // 4. Click on 'Signup / Login' button
  await page.locator('a[href="/login"]').click();

  // 5. Verify 'New User Signup!' is visible
  await expect(page.locator('text=New User Signup!')).toBeVisible();

  // 6. Enter name and email address
  await page.locator('input[name="name"]').fill('Jonis Test');
  const email = `jonis${Date.now()}@example.com`;
  await page.locator('input[data-qa="signup-email"]').fill(email);

  // 7. Click 'Signup' button
  await page.locator('button[data-qa="signup-button"]').click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // 9. Fill details
  await page.locator('#id_gender1').check();
  await page.locator('#password').fill('testpassword');
  await page.selectOption('#days', '1');
  await page.selectOption('#months', '1');
  await page.selectOption('#years', '1990');

  // 10–11. Check newsletter and offers
  await page.locator('#newsletter').check();
  await page.locator('#optin').check();

  // 12. Fill rest of the details
  await page.locator('#first_name').fill('Jonis');
  await page.locator('#last_name').fill('Test');
  await page.locator('#company').fill('OpenAI');
  await page.locator('#address1').fill('123 Main St');
  await page.locator('#address2').fill('Suite 456');
  await page.selectOption('#country', 'Canada');
  await page.locator('#state').fill('State');
  await page.locator('#city').fill('City');
  await page.locator('#zipcode').fill('12345');
  await page.locator('#mobile_number').fill('1234567890');

  // 13. Click 'Create Account' button
  await page.locator('button[data-qa="create-account"]').click();

  // 14. Verify 'ACCOUNT CREATED!' is visible
  await expect(page.locator('text=Account Created!')).toBeVisible();

  // 15. Click 'Continue' button
  await page.locator('a[data-qa="continue-button"]').click();

  // 16. Verify 'Logged in as username' is visible
  await expect(page.locator(`text=Logged in as Jonis Test`)).toBeVisible();

  // 17. Click 'Delete Account' button
  await page.locator('a[href="/delete_account"]').click();

  // 18. Verify 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator('text=Account Deleted!')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
});
