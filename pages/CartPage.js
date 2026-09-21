// @ts-check

export class CartPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.inventoryItemNames = page.locator(
            '.cart_item .inventory_item_name'
        );
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}