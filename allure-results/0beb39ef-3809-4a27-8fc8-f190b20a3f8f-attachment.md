# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\cart\cart.spec.ts >> Add item to cart
- Location: tests\cart\cart.spec.ts:3:5

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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Add item to cart', async ({ page }) => {
> 4  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |   await page.fill('#user-name', 'standard_user');
  6  |   await page.fill('#password', 'secret_sauce');
  7  |   await page.click('#login-button');
  8  | 
  9  |   await page.click('text=Add to cart');
  10 | 
  11 |   const cartBadge = page.locator('.shopping_cart_badge');
  12 |   await expect(cartBadge).toHaveText('1');
  13 | });
  14 | 
```