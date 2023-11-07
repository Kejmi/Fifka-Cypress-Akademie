import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  it("Logout via polymorphism", () => {
    new LoginPage()
    .openPmtool()
    .typeUsername("pw_skoleni")
    .typePassword("TEG2023")
    .clickLogin()
    .clickProfile()
    .clickLogoff();
  });
});