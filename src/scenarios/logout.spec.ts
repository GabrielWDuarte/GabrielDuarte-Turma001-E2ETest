import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';

test('Logout no SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.assertLoggedIn();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
