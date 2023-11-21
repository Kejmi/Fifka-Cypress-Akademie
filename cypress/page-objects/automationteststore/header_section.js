export class HeaderSection {
    constructor() {
        this.loginOrRegisterButton = "#customer_menu_top";
    }

    clickLoginOrRegisterButton () {
        const { LoginPage } = require("./login_page");
        cy.get(this.loginOrRegisterButton).click();
        return new LoginPage();
    }
}