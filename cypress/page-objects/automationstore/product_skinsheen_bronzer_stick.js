export class SkinsheenProduct {
    constructor() {
        this.basketButton = ".cart";
    }

    clickBasket() {
        cy.get(this.basketButton).click();
        return this;
    }
}