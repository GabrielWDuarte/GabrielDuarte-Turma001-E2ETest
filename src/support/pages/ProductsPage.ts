import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]').first();
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
}
