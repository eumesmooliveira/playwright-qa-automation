// @ts-check

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');

        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');

        this.summaryItemName = page.locator('.inventory_item_name');
        this.completeHeader = page.locator('.complete-header');
    }

    async fillCustomerInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}