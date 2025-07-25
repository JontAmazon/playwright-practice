// Note:
// due to website limitations (accounts always being removed), this test is very long.
// optimally, we would have two tests:
//    - open-new-bank-account
//    - transfer-funds

const { test, expect } = require('../fixtures/fixtures');
const { getAccountOverviewTableData, getAccountBalance } = require('../utils');

test('Open new bank account and transfer funds', async ({ loginPage }) => {
  /* Test steps:
      1. Login.
      2. Find first account (account A) and its balance.
      3. Open new bank account, B.
          Note: when opening a new account, one must transfer
          $100 minimum from an existing account (use Account A).
      4. Verify A has $100 less, and B has $100.
      5. Transfer $100 from B to A.
      6. Verify A has original amount, and B has $0.
  */
  const page = loginPage.page;
  await loginPage.login();

  // Parse account overview table, get account A and its balance.
  const tableData = await getAccountOverviewTableData(page);
  const accountA = tableData[0].account;
  const initialBalanceA = parseFloat(tableData[0].balance.replace('$', ''));
  let balanceA = initialBalanceA 
  
  // Open new account B
  // When opening a new account, one must transfer $100 minimum from an existing account (use Account A).
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.locator('#fromAccountId').selectOption(accountA);
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
  const accountB = (await page.locator('#newAccountId').textContent()).trim();

  // Go to overview and verify balances:
  // A shall have $100 less, B shall have $100.
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  let balanceB = await getAccountBalance(page, accountB);
  balanceA = await getAccountBalance(page, accountA);
  expect(balanceB).toBeCloseTo(100, 1);
  expect(balanceA).toBeCloseTo(initialBalanceA - 100, 1);

  // Transfer $100 from B to A
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('#amount').fill('100');
  await page.locator('#fromAccountId').selectOption(accountB);
  await page.locator('#toAccountId').selectOption(accountA);
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.locator('#showResult h1')).toHaveText('Transfer Complete!');
  await expect(page.locator('#showResult h1')).toBeVisible();

  // Go to overview and verify balances:
  // A shall have original amount, B shall have $0.
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  balanceA = await getAccountBalance(page, accountA);
  balanceB = await getAccountBalance(page, accountB);
  expect(balanceA).toBeCloseTo(initialBalanceA , 1);
  expect(balanceB).toBeCloseTo(0, 1);
});
