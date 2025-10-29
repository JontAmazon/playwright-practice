const { test, expect } = require('@playwright/test');

test('Deny access to account info without authentication', async ({ request }) => {
    const baseURL = 'https://parabank.parasoft.com/parabank/services/bank';
    const realAccountId = "TODO"; // TODO: find a valid account ID
    const endpoint = `${baseURL}/accounts/${fakeAccountId}`;
    const response = await request.get(endpoint);
    expect(response.status()).toBe(404); // right?

    // question:
    // I hope we're not still logged in? How to ensure that?
    

});

/* --- how to get realAccountId? ---
Short version: fetch it from the API using an authenticated request context, then hit the same account unauthenticated.
For example using Parabank’s demo user:
  const username = 'john';
  const password = 'demo';
*/



/* --- EVEV Debugging ---
console.log(`\n[GET] ${endpoint}`);
console.log(`Status: ${response.status()}`);
const body = await response.text();
console.log(`Body:\n${body}`);
*/