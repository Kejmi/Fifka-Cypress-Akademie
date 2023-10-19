import { LoginPage } from "./login_page";

export class LostPasswordPage {
    constructor () {

        this.lostPasswordPage = "http://tredgate.com/pmtool/index.php?module=users/restore_password";
        this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
        this.emailInput = ":nth-child(3) > .input-icon > .form-control";
        this.sendButton = ".btn-info"
        this.backButton = "'#back-btn"
    }

typeUsername (username) {
    cy.get(this.usernameInput).type(username);
    return this;
}

typeEmail (email){
     cy.get(this.emailInput).type(email);
     return this;
}

clickBack (){
    cy.get(this.sendButton).click();
    return LoginPage();
}

clickSend () {
    cy.get(this.sendButton).click();
    return LoginPage();
}

}