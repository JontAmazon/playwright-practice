# Test info

- Name: Open new bank account and transfer funds
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/open-new-bank-account-and-transfer-funds.spec.js:10:1

# Error details

```
Error: expect(received).toBeCloseTo(expected, precision)

Expected: 100
Received: 90

Expected precision:    1
Expected difference: < 0.05
Received difference:   10
    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/open-new-bank-account-and-transfer-funds.spec.js:43:20
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
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - cell "Account"
      - cell "Balance*"
      - cell "Available Amount"
  - rowgroup:
    - row "28329 $10.00 $10.00":
      - cell "28329":
        - link "28329":
          - /url: activity.htm?id=28329
      - cell "$10.00"
      - cell "$10.00"
    - row "28440 $90.00 $90.00":
      - cell "28440":
        - link "28440":
          - /url: activity.htm?id=28440
      - cell "$90.00"
      - cell "$90.00"
    - row "Total $100.00":
      - cell "Total"
      - cell "$100.00"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
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
   1 | // Note:
   2 | // due to website limitations (accounts always being removed), this test is very long.
   3 | // optimally, we would have two tests:
   4 | //    - open-new-bank-account
   5 | //    - transfer-funds
   6 |
   7 | const { testWithLogin, expect } = require('../fixtures/fixtures');
   8 | const { getAccountOverviewTableData, getAccountBalance } = require('../utils');
   9 |
  10 | testWithLogin('Open new bank account and transfer funds', async ({ loginPage }) => {
  11 |   /* Test steps:
  12 |       1. Login.
  13 |       2. Find first account (account A) and its balance.
  14 |       3. Open new bank account, B.
  15 |           Note: when opening a new account, one must transfer
  16 |           $100 minimum from an existing account (use Account A).
  17 |       4. Verify A has $100 less, and B has $100.
  18 |       5. Transfer $100 from B to A.
  19 |       6. Verify A has original amount, and B has $0.
  20 |   */
  21 |   const page = loginPage.page;
  22 |   await loginPage.login();
  23 |
  24 |   // Parse account overview table, get account A and its balance.
  25 |   const tableData = await getAccountOverviewTableData(page);
  26 |   const accountA = tableData[0].account;
  27 |   const initialBalanceA = parseFloat(tableData[0].balance.replace('$', ''));
  28 |   let balanceA = initialBalanceA 
  29 |   
  30 |   // Open new account B
  31 |   // When opening a new account, one must transfer $100 minimum from an existing account (use Account A).
  32 |   await page.getByRole('link', { name: 'Open New Account' }).click();
  33 |   await page.locator('#fromAccountId').selectOption(accountA);
  34 |   await page.getByRole('button', { name: 'Open New Account' }).click();
  35 |   await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
  36 |   const accountB = (await page.locator('#newAccountId').textContent()).trim();
  37 |
  38 |   // Go to overview and verify balances:
  39 |   // A shall have $100 less, B shall have $100.
  40 |   await page.getByRole('link', { name: 'Accounts Overview' }).click();
  41 |   let balanceB = await getAccountBalance(page, accountB);
  42 |   balanceA = await getAccountBalance(page, accountA);
> 43 |   expect(balanceB).toBeCloseTo(100, 1);
     |                    ^ Error: expect(received).toBeCloseTo(expected, precision)
  44 |   expect(balanceA).toBeCloseTo(initialBalanceA - 100, 1);
  45 |
  46 |   // Transfer $100 from B to A
  47 |   await page.getByRole('link', { name: 'Transfer Funds' }).click();
  48 |   await page.locator('#amount').fill('100');
  49 |   await page.locator('#fromAccountId').selectOption(accountB);
  50 |   await page.locator('#toAccountId').selectOption(accountA);
  51 |   await page.getByRole('button', { name: 'Transfer' }).click();
  52 |   await expect(page.locator('#showResult h1')).toHaveText('Transfer Complete!');
  53 |   await expect(page.locator('#showResult h1')).toBeVisible();
  54 |
  55 |   // Go to overview and verify balances:
  56 |   // A shall have original amount, B shall have $0.
  57 |   await page.getByRole('link', { name: 'Accounts Overview' }).click();
  58 |   balanceA = await getAccountBalance(page, accountA);
  59 |   balanceB = await getAccountBalance(page, accountB);
  60 |   expect(balanceA).toBeCloseTo(initialBalanceA , 1);
  61 |   expect(balanceB).toBeCloseTo(0, 1);
  62 | });
  63 |
```