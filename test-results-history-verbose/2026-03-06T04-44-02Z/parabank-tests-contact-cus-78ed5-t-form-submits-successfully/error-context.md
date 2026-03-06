# Test info

- Name: Contact form submits successfully
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/contact-customer-support.spec.js:3:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Contact Us' })

    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/contact-customer-support.spec.js:5:56
```

# Page snapshot

```yaml
- banner:
  - heading "Bad gateway Error code 502" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
  - text: for more information. 2026-03-06 04:43:01 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
- text: Ashburn
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
- text: Working parabank.parasoft.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: The web server reported a bad gateway error.
- heading "What can I do?" [level=2]
- paragraph: Please try again in a few minutes.
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: 9d7eb272fb81c095
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
```

# Test source

```ts
   1 | const { test, expect } = require('../fixtures/fixtures');
   2 |
   3 | test('Contact form submits successfully', async ({ page }) => {
   4 |   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
>  5 |   await page.getByRole('link', { name: 'Contact Us' }).click();
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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