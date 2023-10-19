import { SkinsheenProduct } from "./product_skinsheen_bronzer_stick";

export class HomePage {
    constructor() {
        this.storeUrl = "https://automationteststore.com/";
        this.product = "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img";
    }

    openStore() {
        cy.visit(this.storeUrl);
        return this;
    }

    clickSkinsheenProduct() {
        cy.get(this.product).click();
        return new SkinsheenProduct();
    }
    
}