import { LoginPage } from "./login_page";
import { ProductSkinsheenBronzerStickPage } from "./product_skinsheen_bronzer_stick_page";

export class HomePage {
  constructor() {
    this.storeUrl = "https://automationteststore.com/";
    this.LoginOrRegisterButton = "ul[id='customer_menu_top'] li a";
    this.skinsheenBronzerStickNameButton =
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname";
  }

  openStore() {
    cy.visit(this.storeUrl);
    cy.get('.logo > img').should("be.visible");
    return this;
  }

  clickLoginOrRegisterButton() {
    cy.get(this.LoginOrRegisterButton).click();
    cy.get('.newcustomer > .heading2').should("be.visible");
    return new LoginPage();
  }

  clickSkinsheenBronzerStickName() {
    cy.get(this.skinsheenBronzerStickNameButton).click();
    return new ProductSkinsheenBronzerStickPage();
  }
}
