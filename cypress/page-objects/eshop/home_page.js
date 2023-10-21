import { RegistrationPage } from "./registration_page";

export class HomePage {
    constructor() {
        this.eshopUrl = "http://tredgate.com/eshop/";
        this.myAccountButton = ".list-inline > .dropdown > .dropdown-toggle";
        this.registrationButton = ".dropdown-menu > :nth-child(1) > a";
    }

    openHomepage() {
        cy.visit(this.eshopUrl);
        return this;
    }

    clickMyAccount() {
        cy.get(this.myAccountButton).click();
        return this;
    }

    clickRegistration() {
        cy.get(this.registrationButton).click();
        return new RegistrationPage();
    }
}