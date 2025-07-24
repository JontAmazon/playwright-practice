const { test, expect } = require('../fixtures/fixtures');

test('Account overview, balances shall be visible', async ({ loginPage }) => {
  await loginPage.login();
  await expect(loginPage.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

  const table = loginPage.page.locator('table'); // Main table
  
  // Verify column headers
  const headers = table.locator('tr >> nth=0 >> th');
  await expect(headers.nth(0)).toHaveText('Account');
  await expect(headers.nth(1)).toHaveText('Balance*');
  await expect(headers.nth(2)).toHaveText('Available Amount');

  // Verify account number is present
  const accountCell = table.locator('tr >> nth=1 >> td >> nth=0');
  await expect(accountCell).toHaveText(/^\d+$/);

  // Verify balance cell contains a dollar amount
  const balanceCell = table.locator('tr >> nth=1 >> td >> nth=1');
  await expect(balanceCell).toHaveText(/^\$\d/);

  // Verify available amount contains dollar amount
  const availableCell = table.locator('tr >> nth=1 >> td >> nth=2');
  await expect(availableCell).toHaveText(/^\$\d/);
  // await expect(availableCell).toHaveText('Im rich baby!');
});
