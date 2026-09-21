// @ts-check

export class InventoryPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.backpackAddButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}