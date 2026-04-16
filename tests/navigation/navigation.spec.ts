import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('Navigate to cart page', async ({ page }) => {
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);
});

test('Navigate back to inventory', async ({ page }) => {
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="continue-shopping"]').click();

  await expect(page).toHaveURL(/inventory/);
});

test('Open and close menu', async ({ page }) => {
  await page.click('#react-burger-menu-btn');

  const menu = page.locator('.bm-menu');
  await expect(menu).toBeVisible();

  await page.click('#react-burger-cross-btn');
  await expect(menu).not.toBeVisible();
});

test('Logout', async ({ page }) => {
  await page.click('#react-burger-menu-btn');
  await expect(page.locator('.bm-menu')).toBeVisible();

  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});