// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Autenticação - SauceDemo', () => {

    test('CT01 - Deve realizar login com credenciais válidas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('CT02 - Deve exibir erro ao realizar login com senha inválida', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'invalid_password');

        await expect(loginPage.errorMessage)
            .toContainText('Username and password do not match');
    });

    test('CT03 - Deve impedir login de usuário bloqueado', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.errorMessage)
            .toContainText('Sorry, this user has been locked out');
    });

});