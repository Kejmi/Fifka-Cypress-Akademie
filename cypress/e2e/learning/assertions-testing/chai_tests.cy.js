import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe('Chai Tests', () => {

    beforeEach(() => {
        new LoginPage().openPmtool();
    });
    it('Login header has text "Login"', () => {
        cy.get("h3.form-title").should("have.text", "Login");
        return this;
    });


    it.skip('Login header has text "Login2"', () => {
        cy.get("h3.form-title").should("have.text", "Login2");
        return this;
    });

    it('Check password text', () => {
        cy.get("#forget_password").should("have.text", "Password forgotten?");
        return this;
    });

    it('Username input has value testUsername after type', () => {
        cy.get("#username")
        .type("testUsername")
        .should("have.value", "testUsername");
    });

    it('Open forgotten password, type email and check it', () => {
        new LoginPage().clickPasswordForgotten();
        cy.get(':nth-child(3) > .input-icon > .form-control')
        .type("example@email.com")
        .should(
            "have.value",
            "example@email.com"
            );
    });
    it('Username input has form-control class', () => {
        cy.get("#username").should('have.class', 'form-control');
    });

    it('Check login class', () => {
        cy.get(".btn").should("have.class", "btn-info");
    });

    it('Login button is visible', () => {
        cy.get(".btn").should("be.visible");
    });

    it('Login to PM tool and check header visibility', () => {
        new LoginPage()
            .typeUsername("cy_podzim_2023")
            .typePassword("CypressPodzim")
            .clickLogin();

        cy.get('.navbar-brand').should("be.visible");
    });

    it('Login button exists', () => {
        cy.get(".btn").should("exist");
    });

    it('Password forgotten button exists', () => {
        cy.get("#forget_password").should("exist");
    });

    it('Check placeholder attribute', () => {
        cy.get("#username").should("have.attr", "placeholder", "Username");
    });

    it.only('Check password input placeholder attribute', () => {
        cy.get("#password").should("have.attr", "placeholder", "Password");
    });
});