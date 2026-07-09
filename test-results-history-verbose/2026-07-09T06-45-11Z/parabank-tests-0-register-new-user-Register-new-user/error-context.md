# Test info

- Name: Register new user
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/0-register-new-user.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Your account was created')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Your account was created')

    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/0-register-new-user.spec.js:29:62
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
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: John"':
      - cell "First Name:"
      - cell "John":
        - textbox: John
      - cell
    - 'row "Last Name: Smith"':
      - cell "Last Name:"
      - cell "Smith":
        - textbox: Smith
      - cell
    - 'row "Address: Street X"':
      - cell "Address:"
      - cell "Street X":
        - textbox: Street X
      - cell
    - 'row "City: City X"':
      - cell "City:"
      - cell "City X":
        - textbox: City X
      - cell
    - 'row "State: State X"':
      - cell "State:"
      - cell "State X":
        - textbox: State X
      - cell
    - 'row "Zip Code: Zip Code is required."':
      - cell "Zip Code:"
      - cell:
        - textbox
      - cell "Zip Code is required."
    - 'row "Phone #: 1234567890"':
      - 'cell "Phone #:"'
      - cell "1234567890":
        - textbox: "1234567890"
      - cell
    - 'row "SSN: 123456789"':
      - cell "SSN:"
      - cell "123456789":
        - textbox: "123456789"
      - cell
    - row:
      - cell
    - 'row "Username: JohnSmith42"':
      - cell "Username:"
      - cell "JohnSmith42":
        - textbox: JohnSmith42
      - cell
    - row "Password:":
      - cell "Password:"
      - cell:
        - textbox
      - cell
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
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
> 29 |     await expect(page.getByText('Your account was created')).toBeVisible();
     |                                                              ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
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
  47 |   await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  48 |   await expect(page.getByText('Log Out')).toBeVisible();
  49 | });
  50 |
```