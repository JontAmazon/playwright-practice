# Test info

- Name: Login test
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/login.spec.js:3:1

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

    at LoginPage.login (/home/runner/work/playwright-practice/playwright-practice/parabank/pages/LoginPage.js:12:30)
    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/login.spec.js:4:3
```

# Page snapshot

```yaml
- banner:
  - heading "Connection timed out Error code 522" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=parabank.parasoft.com
  - text: for more information. 2025-12-03 03:53:25 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=parabank.parasoft.com
- text: Chicago
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=parabank.parasoft.com
- text: Working parabank.parasoft.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: The initial connection between Cloudflare's network and the origin web server timed out. As a result, the web page can not be displayed.
- heading "What can I do?" [level=2]
- heading "If you're a visitor of this website:" [level=3]
- paragraph: Please try again in a few minutes.
- heading "If you're the owner of this website:" [level=3]
- paragraph:
  - text: Contact your hosting provider letting them know your web server is not completing requests. An Error 522 means that the request was able to connect to your web server, but that the request didn't finish. The most likely cause is that something on your server is hogging resources.
  - link "Additional troubleshooting information here.":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: 9a801d730a4e616c
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=parabank.parasoft.com
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