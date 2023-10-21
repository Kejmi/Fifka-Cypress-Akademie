import { HomePage } from "./home_page";

export class RegistrationPage {
    constructor() {
        this.firstNameInput = "#input-firstname";
        this.lastNameInput = "#input-lastname";
        this.emailInput = "#input-email";
        this.telephoneNumberInput = "#input-telephone";
        this.passwordInput = "#input-password";
        this.passwordConfirmInput = "#input-confirm";
        this.continueButton = ".pull-right > .btn";
    }

    typeFirstName (firstName) {
        cy.get(this.firstNameInput).type(firstName);
        return this;
    }

    typeLastName (lastName) {
        cy.get(this.lastNameInput).type(lastName);
        return this;
    }

    typeEmail (email) {
        cy.get(this.emailInput).type(email);
        return this;
    }

    typeTelephoneNumber (telephoneNumber) {
        cy.get(this.telephoneNumberInput).type(telephoneNumber);
        return this;
    }

    typePassword (password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    typeConfirmPassword (password) {
        cy.get(this.passwordConfirmInput).type(password);
        return this;
    }

    clickContinue () {
        cy.get(this.continueButton).click();
        return new HomePage ();
    }
}