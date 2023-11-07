describe("Debugging", () => {
  it("Debugging PMTool", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[id='customer_menu_top'] li").click().debug();
  });

  it('Using pause()', () => {
    cy.visit("https://automationteststore.com/");
    cy.get("ul[id='customer_menu_top'] li").pause().click();
  });
});