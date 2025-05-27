import { test, expect } from '@playwright/test';

test('Open SauceDemo and check title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
