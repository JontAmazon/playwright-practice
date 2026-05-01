# Test info

- Name: Login test
- Location: /home/runner/work/playwright-practice/playwright-practice/parabank/tests/login.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

    at LoginPage.login (/home/runner/work/playwright-practice/playwright-practice/parabank/pages/LoginPage.js:11:21)
    at /home/runner/work/playwright-practice/playwright-practice/parabank/tests/login.spec.js:4:19
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
> 11 |     await this.page.goto(this.BASE_URL);
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  12 |     await this.usernameInput.fill(username);
  13 |     await this.passwordInput.fill(password);
  14 |     await this.loginButton.click();
  15 |   }
  16 | }
  17 |
  18 | module.exports = LoginPage;
  19 |
```