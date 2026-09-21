// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';

test.describe('Inventário - SauceDemo', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory\.html/);
    });

    test('CT04 - Deve adicionar um produto ao carrinho', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await expect(inventoryPage.pageTitle).toHaveText('Products');

        await inventoryPage.addBackpackToCart();

        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

    test('CT05 - Deve adicionar produto e validar seu conteúdo no carrinho', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addBackpackToCart();

        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.openCart();

        await expect(page).toHaveURL(/cart\.html/);
        await expect(cartPage.pageTitle).toHaveText('Your Cart');
        await expect(cartPage.cartItems).toHaveCount(1);
        await expect(cartPage.inventoryItemNames)
            .toHaveText('Sauce Labs Backpack');
    });
});