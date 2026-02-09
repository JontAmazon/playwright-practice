# Test info

- Name: Register new user
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/0-register-new-user.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Accounts Overview' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Accounts Overview' })

    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/0-register-new-user.spec.js:47:74
```

# Page snapshot

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Error!" [level=1]
- paragraph: An internal error has occurred and has been logged.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
   1 | const { test, expect } = require('../fixtures/fixtures');
   2 |
   3 | test('Register new user', async ({ page }, testInfo) => {
   4 |   // const username = 'user' + Date.now();
   5 |   const username = 'JohnSmith42';
   6 |   const password = 'password';
   7 |   console.log(username);
   8 |   
   9 |   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  10 |   await page.getByRole('link', { name: 'Register' }).click();
  11 |   
  12 |   const firstNameInput = page.locator('#customer\\.firstName');
  13 |   await expect(firstNameInput).toBeEditable();
  14 |   await page.fill('#customer\\.firstName', 'John');
  15 |   await page.fill('#customer\\.lastName', 'Smith');
  16 |   await page.fill('#customer\\.address\\.street', 'Street X');
  17 |   await page.fill('#customer\\.address\\.city', 'City X');
  18 |   await page.fill('#customer\\.address\\.state', 'State X');
  19 |   await page.fill('#customer\\.address\\.zipCode', '12345');
  20 |   await page.fill('#customer\\.phoneNumber', '1234567890');
  21 |   await page.fill('#customer\\.ssn', '123456789');
  22 |   await page.fill('#customer\\.username', username);
  23 |   await page.fill('#customer\\.password', password);
  24 |   await page.fill('#repeatedPassword', password);
  25 |
  26 |   await page.getByRole('button', { name: 'Register' }).click();
  27 |
  28 |   try {
  29 |     await expect(page.getByText('Your account was created')).toBeVisible();
  30 |   } catch (err) {
  31 |     if (await page.locator('text=verify you are human').count() > 0) { // works?
  32 |       // throw new Error('CAPTCHA detected.'); // alternative to skipping
  33 |       testInfo.skip(true, 'CAPTCHA detected'); // works?
  34 |     }
  35 |     const content = await page.locator('#rightPanel').textContent();
  36 |     console.log(content);
  37 |     throw err;
  38 |   }
  39 |   await expect(page.getByText('You are now logged in')).toBeVisible();
  40 |
  41 |   await page.getByRole('link', { name: 'Log Out' }).click();
  42 |
  43 |   // Re-login to verify
  44 |   await page.fill('input[name="username"]', username);
  45 |   await page.fill('input[name="password"]', password);
  46 |   await page.getByRole('button', { name: 'Log In' }).click();
> 47 |   await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
     |                                                                          ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  48 |   await expect(page.getByText('Log Out')).toBeVisible();
  49 | });
  50 |
```