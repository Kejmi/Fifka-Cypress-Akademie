import { CreateAccountPage } from "./create_account_page";

export class LoginPage{
    constructor() {
        this.continueButton = "button[title='Continue']";
    }

    clickContinueButton() {
        cy.get(this.continueButton).click();
        return new CreateAccountPage();
    }
}