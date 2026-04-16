import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Valid login', async ({ page }) => {
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('Invalid login', async ({ page }) => {
  await page.fill('[data-test="username"]', 'wrong');
  await page.fill('[data-test="password"]', 'wrong');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Empty login', async ({ page }) => {
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});