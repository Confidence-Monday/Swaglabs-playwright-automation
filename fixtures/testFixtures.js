import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

// Extend base test
export const test = base.extend({

  // Login Page fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // automatic navigation
    await use(loginPage);
  },

  // Logged-in user fixture
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(page);
  }

});

export const expect = base.expect;