export class AccountCreatedPage {
    constructor() {
        this.accountCreatedText = ".maintext";
    }

    confirmAccountCreation() {
        cy.get(this.accountCreatedText).should("have.text", " Your Account Has Been Created!")
        return this;
    }
}