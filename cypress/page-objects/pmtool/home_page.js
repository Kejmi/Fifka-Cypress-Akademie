import { LoginPage } from "./login_page";

export class HomePage {
constructor() {
    this.profileToggle = "#user_dropdown > .dropdown-toggle";
    this.userLogout = "#logout > a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
}

    clickProfileSection() {
        cy.get(this.profileToggle).click();
        return this;
    }

    clickLogOff() {
        cy.get(this.userLogout).click();
        return new LoginPage();
    }
}