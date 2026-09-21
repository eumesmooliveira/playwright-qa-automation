// @ts-check

export class CartPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.inventoryItemNames = page.locator('.inventory_item_name');
    }
}