import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly firstProductLink: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProductLink = page.locator('.inventory_item a').first();
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async openFirstProduct() {
    await this.firstProductLink.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}
