# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\edgecase\edgecase.spec.ts >> Invalid login
- Location: tests\edgecase\edgecase.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('Invalid login', async ({ page }) => {
> 4 |   await page.fill('#user-name', 'wrong');
    |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  5 |   await page.fill('#password', 'wrong');
  6 |   await page.click('#login-button');
  7 | 
  8 |   await expect(page.locator('[data-test="error"]')).toBeVisible();
  9 | });
```