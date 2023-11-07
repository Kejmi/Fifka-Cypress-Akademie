import { HomePage } from "./home_page";

export class Projects {
    constructor () {
        this.addProjectButton = "[test_id='Add Project']";
        this.nameField = "#fields_158";
        this.saveButton = "button[type='submit']";
    }

        clickAddProject() {
            cy.get(this.addProjectButton).click();
            return this;       
        }

        typeProjectName (randomProjectName) {
            cy.get(this.nameField).type(randomProjectName);
            return this;
        }

        clickSaveButton () {
            cy.get(this.saveButton).click();
            return new HomePage;
        }


}



