# Test info

- Name: Account overview - balances shall be visible
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/account-overview.spec.js:4:1

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

    at LoginPage.login (/home/runner/work/playwright-practice/playwright-practice/parabank/pages/LoginPage.js:12:30)
    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/account-overview.spec.js:5:3
```

# Page snapshot

```yaml
- banner:
  - heading "Bad gateway Error code 502" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
  - text: for more information. 2025-12-25 04:00:42 UTC
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
  - strong: 9b356ed6db3038aa
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=parabank.parasoft.com
```

# Test source

```ts
   1 | class LoginPage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';
   5 |     this.usernameInput = page.locator('input[name="username"]');
   6 |     this.passwordInput = page.locator('input[name="password"]');
   7 |     this.loginButton = page.locator('input[value="Log In"]');
   8 |   }
   9 |
  10 |   async login(username = 'JohnSmith42', password = 'password') {
  11 |     await this.page.goto(this.BASE_URL);
> 12 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 |     await this.passwordInput.fill(password);
  14 |     await this.loginButton.click();
  15 |   }
  16 | }
  17 |
  18 | module.exports = LoginPage;
  19 |
```