describe('Base URL Tests', () => {
    it('Using baseURL in visit', () => {
        cy.visit("/");
    });

    it('Open different url then baseUrl', () => {
        cy.visit("https://tredgate.cz");
    });
});