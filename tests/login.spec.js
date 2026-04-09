import { test, expect } from '../fixtures/testFixtures';

test('Login with empty fields', async ({ loginPage }) => {await loginPage.login('', '');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('Username is required');
});

test('Login with only username', async ({ loginPage }) => {
  await loginPage.login('standard_user', '');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('Password is required');
});

test('Login with invalid credentials', async ({ loginPage }) => {
  await loginPage.login('wrong_user', 'wrong_pass');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('Username and password do not match');
});

test('Login with valid credentials', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});