const { test, expect } = require('@playwright/test');

test('Should deny access to account info without authentication', async ({ request }) => {
    const baseURL = 'https://parabank.parasoft.com/parabank/services/bank';
    const fakeAccountId = 12345;
    const endpoint = `${baseURL}/accounts/${fakeAccountId}`;
    const response = await request.get(endpoint);

    // Helpful debugging
    console.log(`\n[GET] ${endpoint}`);
    console.log(`Status: ${response.status()}`);
    const body = await response.text();
    console.log(`Body:\n${body}`);

    expect(response.status()).toBe(400);
});
