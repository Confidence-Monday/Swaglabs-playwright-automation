import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Login with empty fields', async ({ page }) => {
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Login with only username', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Checkout with empty form', async ({ page }) => {
  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Go to checkout
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // Submit empty form
  await page.click('[data-test="continue"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Cart badge not visible when empty', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});