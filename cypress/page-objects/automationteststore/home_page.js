import { HeaderSection } from "./header_section";
import { ProductSkinsheenBronzerStickPage } from "./product_skinsheen_bronzer_stick_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.storeUrl = "https://automationteststore.com/";
    this.skinsheenBronzerStickNameButton =
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname";
  }

  openStore() {
    cy.visit(this.storeUrl);
    return this;
  }

  clickSkinsheenBronzerStickName() {
    cy.get(this.skinsheenBronzerStickNameButton).click();
    return new ProductSkinsheenBronzerStickPage();
  }
}
