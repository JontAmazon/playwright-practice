async function getAccountOverviewTableData(page) {
  /* Parse Account Overview table. Returns an output like:
  [
    { account: '29883', balance: '$246.50' },
    { account: '29994', balance: '$413.00' },
    { account: 'Total', balance: '$659.50' }
  ]
  */
  await page.waitForSelector('#accountTable');
  await new Promise(resolve => setTimeout(resolve, 1000)); // otherwise not all rows get loaded? fix later?
  const rows = await page.locator('#accountTable tr').all();

  const tableData = [];
  for (let i = 1; i < rows.length - 1; i++) { // skip header (0) and footer (last)
    const cells = await rows[i].locator('td').allTextContents();
    tableData.push({
      account: cells[0].trim(),
      balance: cells[1].trim(),
      // available: cells[2].trim(), // if needed later
    });
  }
  // console.log({ tableData });
  return tableData
}


async function getAccountBalance(page, account) {
  /* Get balance for a specific account from the account overview table. Returns a float. */
  const tableData = await getAccountOverviewTableData(page);
  const entry = tableData.find(row => row.account === account);

  if (!entry) {
    throw new Error(`Account ${account} not found in overview table.`);
  }

  return parseFloat(entry.balance.replace('$', ''));
}


module.exports = {
  getAccountOverviewTableData,
  getAccountBalance,
};
