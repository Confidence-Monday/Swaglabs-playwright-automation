import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('Complete checkout successfully', async ({ page }) => {
  // Add item
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Go to cart
  await page.click('.shopping_cart_link');

  // Checkout
  await page.click('[data-test="checkout"]');

  // Fill form
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');

  await page.click('[data-test="continue"]');

  await expect(page).toHaveURL(/checkout-step-two/);

  // Finish order
  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

test('Checkout with empty fields shows error', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // Submit empty form
  await page.click('[data-test="continue"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});