import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';

test('Login inválido no SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('usuario_invalido', 'senha_invalida');

  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
