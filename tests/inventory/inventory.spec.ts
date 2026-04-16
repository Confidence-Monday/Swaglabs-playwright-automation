import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('Inventory items are displayed', async ({ page }) => {
  const items = page.locator('.inventory_item');

  await expect(items).toHaveCount(6);
});

test('Add item button changes to remove', async ({ page }) => {
  const addBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

  await addBtn.click();

  const removeBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(removeBtn).toBeVisible();
});