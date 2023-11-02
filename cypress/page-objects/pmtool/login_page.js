import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password";

export class LoginPage {
  constructor() {
    this.pmtoolUrl =  "http://tredgate.com/pmtool/";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.forgetPasswordButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.rememberMeCheckbox = ".checkbox";
    this.logo = "img";
    this.alertDiv = ".alert-danger";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  
  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickPasswordForgotten() {
    cy.get(this.forgetPasswordButton).click();
    return new LostPasswordPage();
  }

  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  usernameInputHasPlaceholder() {
    cy.get(this.usernameInput).should("have.attr", "placeholder", "Username");
    return this;
  }

  passwordInputHasPlaceholder() {
    cy.get(this.passwordInput).should("have.attr", "placeholder", "Password");
    return this;
  }

  rememberMeHasText(rememberMeText){
    cy.get(this.rememberMeCheckbox).should("contains.text", rememberMeText);
    return this;
  }

  loginButtonHasText(loginButtonText){
    cy.get(this.loginButton).should("have.text", loginButtonText);
    return this;
  }

  passwordForgottenHasText(passwordForgottenText){
    cy.get(this.forgetPasswordButton).should("have.text", passwordForgottenText);
    return this;
  }

  logoIsVisible(){
    cy.get(this.logo).should("be.visible");
    return this;
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

}
