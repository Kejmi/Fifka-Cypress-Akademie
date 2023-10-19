import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Fluent Login Tests', () => {
    it('Login to pmtool using Fluent API test', () => {
        new LoginPage()
        .openPmtool()
        .typeUsername("cy_podzim_2023")
        .typePassword("CypressPodzim")
        .clickLogin()
        .clickProfileSection()
        .clickLogOff();
    })

});