import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Login page tests', () => {

    beforeEach(() => {
        new LoginPage().openPmtool();
    });
    it('Page header has text "Login"', () => {
        new LoginPage().pageHeaderHasText("Login");
    });

    it('Inputs placeholder texts control', () => {
        new LoginPage()
        .usernameInputHasPlaceholder("Username")
        .passwordInputHasPlaceholder("Password");
    });

    it('Buttons text control', () => {
        new LoginPage()
        .passwordForgottenHasText("Password forgotten?")
        .rememberMeHasText("Remember Me")
        .loginButtonHasText("Login");
    });

    it('Logo is visible', () => {
        new LoginPage()
        .logoIsVisible();
    });

    it('Alert Div doesnt exist', () => {
        new LoginPage()
        .alertNotExist();
    });
});