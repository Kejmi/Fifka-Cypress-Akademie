import { LoginPage } from "../../page-objects/tegb/login_page";

describe(' API TegB tests', () => {
    it('Login to TegB', () => {
        const username = Cypress.env("tegb_username");
        const password = Cypress.env("tegb_password");

        new LoginPage()
        .openTegB()
        .typeUsername(username)
        .typePassword(password)
        .clickLogin();
    });

    it('Login, click on accounts and check header', () => {
        const username = Cypress.env("tegb_username");
        const password = Cypress.env("tegb_password");
        const titleText = "Account";

        new LoginPage()
        .openTegB()
        .typeUsername(username)
        .typePassword(password)
        .clickLogin()
        .waitForLoginApi()
        .clickAccounts()
        .waitForAccountsLoad()
        .titleHasText(titleText);
    });
});