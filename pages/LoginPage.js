class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('.error-message-container');
  }

  // Navigate to login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Perform login
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Get error message
  async getError() {
    return this.errorMessage;
  }
}

export default LoginPage;