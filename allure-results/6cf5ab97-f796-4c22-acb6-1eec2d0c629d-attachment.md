# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.js >> Login with only username
- Location: tests\login.spec.js:9:5

# Error details

```
Test timeout of 30000ms exceeded while setting up "loginPage".
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     // Locators
  6  |     this.usernameInput = page.locator('#user-name');
  7  |     this.passwordInput = page.locator('#password');
  8  |     this.loginButton = page.locator('#login-button');
  9  |     this.errorMessage = page.locator('.error-message-container');
  10 |   }
  11 | 
  12 |   // Navigate to login page
  13 |   async goto() {
> 14 |     await this.page.goto('https://www.saucedemo.com/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 |   }
  16 | 
  17 |   // Perform login
  18 |   async login(username, password) {
  19 |     await this.usernameInput.fill(username);
  20 |     await this.passwordInput.fill(password);
  21 |     await this.loginButton.click();
  22 |   }
  23 | 
  24 |   // Get error message
  25 |   async getError() {
  26 |     return this.errorMessage;
  27 |   }
  28 | }
  29 | 
  30 | export default LoginPage;
```