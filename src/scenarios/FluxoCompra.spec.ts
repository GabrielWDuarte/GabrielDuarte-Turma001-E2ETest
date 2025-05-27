import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { ProductsPage } from '../support/pages/ProductsPage';
import { CartPage } from '../support/pages/CartPage';

test('Fluxo de compra no SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.assertLoggedIn();

  await products.addFirstProductToCart();
  await products.goToCart();

  await cart.assertItemInCart();
});
