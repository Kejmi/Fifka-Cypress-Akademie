import { LoginPage } from "./login_page";
import { Projects } from "./projects";

export class HomePage {
constructor() {
    this.profileToggle = "#user_dropdown > .dropdown-toggle";
    this.userLogout = "#logout > a";
    this.projectsButton = "#Projects";
}

    clickProfileSection() {
        cy.get(this.profileToggle).click();
        return this;
    }

    clickLogOff() {
        cy.get(this.userLogout).click();
        return new LoginPage();
    }

    clickProjects() {
        cy.get(this.projectsButton).click();
        return new Projects();
    }
}