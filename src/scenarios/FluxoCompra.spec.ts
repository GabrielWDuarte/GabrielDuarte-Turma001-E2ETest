import { test } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { ProductsPage } from '../support/pages/ProductsPage';
import { ProductDetailsPage } from '../support/pages/ProductDetailsPage';
import { CartPage } from '../support/pages/CartPage';

test.describe('SauceDemo - Fluxo de compra completo', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let productDetailsPage: ProductDetailsPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoggedIn();
  });

  test('Adicionar produto ao carrinho e validar', async () => {
    await productsPage.openFirstProduct();
    await productDetailsPage.addToCart();
    await productDetailsPage.backToProducts();

    await productsPage.openCart();
    await cartPage.assertProductInCart();
  });
});
