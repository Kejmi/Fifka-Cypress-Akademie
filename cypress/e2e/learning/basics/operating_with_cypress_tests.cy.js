describe("Operating with Cypress Tests", () => {
    it.only("Login test", () => {
        const username = 'cy_podzim_2023';
        cy.visit("http://tredgate.com/pmtool/");
        cy.get('#username').type(username);
        cy.get('#password').type('CypressPodzim');
        cy.get('.btn').click();
    });
    it('Test Failure - element not present', () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.get('#username2');
    });
});