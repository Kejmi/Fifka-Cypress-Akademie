describe('HW6 - User registration', () => {
    it('Fill text fields', () => {
        const firstName = "Test";
        const lastName = "User";
        const userEmail = "test@test.eu";
        const telephoneNumber = "123456789";
        const userPassword = "TestPassword";
        cy.visit('http://tredgate.com/eshop/index.php?route=account/register');
        cy.get('#input-firstname').type(firstName);
        cy.get('#input-lastname').type(lastName);
        cy.get('#input-email').type(userEmail);
        cy.get('#input-telephone').type(telephoneNumber);
        cy.get('#input-password').type(userPassword);
        cy.get('#input-confirm').type(userPassword);
        cy.get('.pull-right > .btn').click();
    });
});