export class AccountCreatedPage {
    constructor() {
        this.accountCreatedText = ".maintext";
    }

    confirmAccountCreation() {
        cy.get(this.accountCreatedText).should("have.text", "YOUR ACCOUNT HAS BEEN CREATED!")
        return this;
    }
}