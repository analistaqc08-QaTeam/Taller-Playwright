import { test, expect } from '@playwright/test';

test.describe('Sauce', () => {

  test('abrir pagina sauce demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );
  });
  

test('Seleccionar producto', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Nombre1');
  await page.locator('[data-test="lastName"]').fill('Apellido2');
  await page.locator('[data-test="postalCode"]').fill('123');
  await page.locator('[data-test="continue"]').click();
  });
  

});