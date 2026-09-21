// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

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

    test('CT06 - Deve concluir uma compra com sucesso', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await inventoryPage.addBackpackToCart();
        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.openCart();

        await expect(page).toHaveURL(/cart\.html/);
        await expect(cartPage.inventoryItemNames)
            .toHaveText('Sauce Labs Backpack');

        await cartPage.proceedToCheckout();

        await expect(page).toHaveURL(/checkout-step-one\.html/);
        await expect(checkoutPage.pageTitle)
            .toHaveText('Checkout: Your Information');

        await checkoutPage.fillCustomerInformation(
            'Felipe',
            'Oliveira',
            '78550-000'
        );

        await checkoutPage.continueCheckout();

        await expect(page).toHaveURL(/checkout-step-two\.html/);
        await expect(checkoutPage.pageTitle)
            .toHaveText('Checkout: Overview');
        await expect(checkoutPage.summaryItemName)
            .toHaveText('Sauce Labs Backpack');

        await checkoutPage.finishCheckout();

        await expect(page).toHaveURL(/checkout-complete\.html/);
        await expect(checkoutPage.pageTitle)
            .toHaveText('Checkout: Complete!');
        await expect(checkoutPage.completeHeader)
            .toHaveText('Thank you for your order!');
    });
});