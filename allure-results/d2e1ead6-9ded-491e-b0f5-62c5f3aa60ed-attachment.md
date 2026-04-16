# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\checkout\checkout.spec.ts >> Complete checkout
- Location: tests\checkout\checkout.spec.ts:3:5

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
  3  | test('Complete checkout', async ({ page }) => {
> 4  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |   await page.fill('#user-name', 'standard_user');
  6  |   await page.fill('#password', 'secret_sauce');
  7  |   await page.click('#login-button');
  8  | 
  9  |   await page.click('text=Add to cart');
  10 |   await page.click('.shopping_cart_link');
  11 |   await page.click('text=Checkout');
  12 | 
  13 |   await page.fill('#first-name', 'John');
  14 |   await page.fill('#last-name', 'Doe');
  15 |   await page.fill('#postal-code', '12345');
  16 | 
  17 |   await page.click('text=Continue');
  18 | 
  19 |   await expect(page).toHaveURL(/checkout-step-two/);
  20 | });
```