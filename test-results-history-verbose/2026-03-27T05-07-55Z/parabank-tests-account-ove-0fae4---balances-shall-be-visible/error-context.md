# Test info

- Name: Account overview - balances shall be visible
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/account-overview.spec.js:4:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Accounts Overview' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Accounts Overview' })

    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/account-overview.spec.js:6:84
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
   1 | const { testWithLogin, expect } = require('../fixtures/fixtures');
   2 | // const { getAccountOverviewTableData, getAccountBalance } = require('../utils');
   3 |
   4 | testWithLogin('Account overview - balances shall be visible', async ({ loginPage }) => {
   5 |   await loginPage.login();
>  6 |   await expect(loginPage.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
     |                                                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   7 |
   8 |   const table = loginPage.page.locator('table'); // Account overview table
   9 |   
  10 |   // Verify column headers
  11 |   const headers = table.locator('tr >> nth=0 >> th');
  12 |   await expect(headers.nth(0)).toHaveText('Account');
  13 |   await expect(headers.nth(1)).toHaveText('Balance*');
  14 |   await expect(headers.nth(2)).toHaveText('Available Amount');
  15 |
  16 |   // Verify account number is present
  17 |   const accountCell = table.locator('tr >> nth=1 >> td >> nth=0');
  18 |   await expect(accountCell).toHaveText(/^\d+$/);
  19 |
  20 |   // Verify balance cell contains a dollar amount
  21 |   const balanceCell = table.locator('tr >> nth=1 >> td >> nth=1');
  22 |   await expect(balanceCell).toHaveText(/^-?\$\d/); // Allow negative balances
  23 |
  24 |   // Verify available amount contains dollar amount
  25 |   const availableCell = table.locator('tr >> nth=1 >> td >> nth=2');
  26 |   await expect(availableCell).toHaveText(/^\$\d/);
  27 |   // await expect(availableCell).toHaveText('Im rich baby!');
  28 | });
  29 |
```