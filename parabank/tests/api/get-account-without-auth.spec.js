const { test, expect } = require('@playwright/test');

test('Deny access to account info without authentication', async ({ request }) => {
    const baseURL = 'https://parabank.parasoft.com/parabank/services/bank';
    const fakeAccountId = 12345678932624213786; // Presumably non-existent account ID
    const endpoint = `${baseURL}/accounts/${fakeAccountId}`;
    const response = await request.get(endpoint);

    // Helpful debugging
    console.log(`\n[GET] ${endpoint}`);
    console.log(`Status: ${response.status()}`);
    const body = await response.text();
    console.log(`Body:\n${body}`);

    expect(response.status()).toBe(400);
});
