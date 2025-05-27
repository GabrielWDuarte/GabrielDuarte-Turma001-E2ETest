import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Fluxo completo com IA no SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const aiArgs = { page, test };

  await ai('Preencha o campo username com "standard_user"', aiArgs);
  await ai('Preencha o campo password com "secret_sauce"', aiArgs);
  await ai('Clique no botão "Login"', aiArgs);
  await ai('Clique no botão "Add to cart" do primeiro produto', aiArgs);
  await ai('Clique no ícone do carrinho', aiArgs);
  await ai('Verifique se o produto está no carrinho', aiArgs);
});
