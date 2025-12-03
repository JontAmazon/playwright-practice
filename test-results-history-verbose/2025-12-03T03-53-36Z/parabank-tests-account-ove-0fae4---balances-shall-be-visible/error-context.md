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