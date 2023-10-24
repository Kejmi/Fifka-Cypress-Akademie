import { HomePage } from "../../page-objects/automationstore/home_page";

describe('Automation Store products tests', () => {
    it('Add Skinsheen product to basket', () => {
        new HomePage()
        .openStore()
        .clickSkinsheenProduct()
        .typeProductQuantity(5)
        .clickBasket();
    });
});