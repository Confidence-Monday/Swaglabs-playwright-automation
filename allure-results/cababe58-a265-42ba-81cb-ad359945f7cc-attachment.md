# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\inventory\inventory.spec.ts >> Products display correctly
- Location: tests\inventory\inventory.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect, Page } from '@playwright/test';
  2  | 
  3  | test('Products display correctly', async ({ page }: { page: Page }) => {
> 4  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |   await page.fill('#user-name', 'standard_user');
  6  |   await page.fill('#password', 'secret_sauce');
  7  |   await page.click('#login-button');
  8  | 
  9  |   const items = await page.locator('.inventory_item');
  10 |   await expect(items).toHaveCount(6);
  11 | });
  12 | 
```