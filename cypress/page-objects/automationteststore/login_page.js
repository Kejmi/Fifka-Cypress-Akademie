import { CreateAccountPage } from "./create_account_page";
import { HeaderSection } from "./header_section";

export class LoginPage extends HeaderSection {
    constructor() {
        super();
        this.continueButton = "button[title='Continue']";
    }

    clickContinueButton() {
        cy.get(this.continueButton).click();
        return new CreateAccountPage();
    }
}