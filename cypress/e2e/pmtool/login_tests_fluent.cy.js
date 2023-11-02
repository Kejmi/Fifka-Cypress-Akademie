import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Fluent Login Tests', () => {

    beforeEach(() => {
        new LoginPage().
            openPmtool();
    });

    it('Login to pmtool using Fluent API test', () => {
        new LoginPage()
        .typeUsername("cy_podzim_2023")
        .typePassword("CypressPodzim")
        .clickLogin()
        .clickProfileSection()
        .clickLogOff();
    })

    it('Click on lost password and return back', () => {
        new LoginPage()
        .clickPasswordForgotten()
        .clickBack();
    });
});
