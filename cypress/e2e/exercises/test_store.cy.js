describe('E-shop basket tests', () => {
    it('Put item into basket and remove it', () => {
        cy.visit("http://automationteststore.com");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').;
    });
});