# Test info

- Name: Contact form submits successfully
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/contact-customer-support.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/contact-customer-support.spec.js:4:14
```

# Test source

```ts
   1 | const { test, expect } = require('../fixtures/fixtures');
   2 |
   3 | test('Contact form submits successfully', async ({ page }) => {
>  4 |   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
   5 |   await page.getByRole('link', { name: 'Contact Us' }).click();
   6 |   await page.waitForURL('**/contact.htm*');
   7 |   await page.fill('#name', 'John Smith');
   8 |   await page.fill('#email', 'email');
   9 |   await page.fill('#phone', 'phone');
  10 |   await page.fill('#message', 'Please contact me!\nI am so lonely!');
  11 |   await page.getByRole('button', { name: 'Send to Customer Care' }).click();
  12 |
  13 |   await expect(page.getByText('Thank you John Smith')).toBeVisible();
  14 |   await expect(page.getByText('A Customer Care Representative will be contacting you.')).toBeVisible();
  15 | });
  16 |
```