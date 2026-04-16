# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\auth\login.spec.ts >> Valid login
- Location: tests\auth\login.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({ page }) => {
> 4  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | });
  6  | 
  7  | test('Valid login', async ({ page }) => {
  8  |   await page.fill('#user-name', 'standard_user');
  9  |   await page.fill('#password', 'secret_sauce');
  10 |   await page.click('#login-button');
  11 | 
  12 |   await expect(page).toHaveURL(/inventory/);
  13 | });
```