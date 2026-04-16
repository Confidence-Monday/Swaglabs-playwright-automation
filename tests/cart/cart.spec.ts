import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login first
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('Add item to cart', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});

test('Remove item from cart', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

test('Cart page shows added item', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toHaveCount(1);
});