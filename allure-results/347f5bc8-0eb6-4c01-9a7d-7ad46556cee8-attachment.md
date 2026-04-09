# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.js >> Valid login
- Location: tests\login.spec.js:4:1

# Error details

```
TypeError: LoginPage is not a constructor
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../pages/LoginPage');
  3  | 
  4  | test('Valid login', async ({ page }) => {
> 5  |  const loginPage = new LoginPage(page);
     |                    ^ TypeError: LoginPage is not a constructor
  6  | 
  7  |  await loginPage.goto();
  8  |  await loginPage.login('standard_user', 'secret_sauce');
  9  | 
  10 |  await expect(page).toHaveURL(/inventory/);
  11 | });
```