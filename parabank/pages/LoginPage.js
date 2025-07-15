class LoginPage {
  constructor(page) {
    this.page = page;
    this.BASE_URL = 'https://parabank.parasoft.com/parabank/index.htm';
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
  }

  async login(username = 'JohnSmith42', password = 'password') {
    await this.page.goto(this.BASE_URL);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
