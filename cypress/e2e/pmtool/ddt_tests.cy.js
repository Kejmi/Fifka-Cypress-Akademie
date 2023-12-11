import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { CreateProjectModal } from "../../page-objects/pmtool/create_project_modal";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit().clickAddProject();
  });

  newProjectData.forEach((projectData) => {
    it(`DDT Project: ${projectData.description}`, () => {
      let startDate;
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 99999 });
      startDate = generateStartDate(projectData.start_date);

      new CreateProjectModal()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .typeProjectName(projectName)
        .typeStartDate(startDate)
        .typeDescription(projectData.description)
        .clickSave()
        .clickProjectInfo()
        .projectTitleHasText(projectName)
        .startDateHasText(startDate)
        .statusHasText(projectData.stauts)
        .priorityHasText(projectData.priority)
        .descriptionHasText(projectData.description);
    });
  });
});

function generateStartDate(startDate) {
  switch (startDate) {
    case "today":
      startDate = moment().format("YYYY-MM-DD");
      break;
    case "tomorrow":
      startDate = moment().add(1, "days").format("YYYY-MM-DD");
      break;
    case "yesterday":
      startDate = moment().subtract(1, "days").format("YYYY-MM-DD");
      break;
    default:
      throw new Error("Invalid start date");
  }
  return startDate;
}
