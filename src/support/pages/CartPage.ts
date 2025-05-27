import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async assertItemInCart() {
    await expect(this.cartItems.first()).toBeVisible();
  }
}
