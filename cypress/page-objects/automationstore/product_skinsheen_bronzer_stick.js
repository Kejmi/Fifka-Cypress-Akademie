export class SkinsheenProduct {
    constructor() {
        this.basketButton = ".cart";
        this.productQuantityInput = "#product_quantity";
    }

    typeProductQuantity (quantity) {
        cy.get(this.productQuantityInput).clear().type(quantity);
        return this;
    }

    clickBasket() {
        cy.get(this.basketButton).click();
        // TODO: dodělat return statement, jakmile bude hotový page object pro košík.
    }
}