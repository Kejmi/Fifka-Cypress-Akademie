export class HomePage {
constructor() {
    this.profileToggle = "#user_dropdown > .dropdown-toggle";
    this.userLogout = "#logout > a";
}

    clickProfileSection() {
        cy.get(this.profileToggle).click();
    }

    clickLogOff() {
        cy.get(this.userLogout).click();
    }
}