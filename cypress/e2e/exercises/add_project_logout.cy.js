import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe('Login, select Projects, add project, save it and logout', () => {
    it('The test', () => {
        const projectName = faker.commerce.productMaterial();
        new LoginPage()
        .openPmtool()
        .typeUsername("cy_podzim_2023")
        .typePassword("CypressPodzim")
        .clickLogin()
        .clickProjects()
        .clickAddProject()
        .typeProjectName(projectName)
        .clickSaveButton()
        .clickProfileSection()
        .clickLogOff();
    });
});