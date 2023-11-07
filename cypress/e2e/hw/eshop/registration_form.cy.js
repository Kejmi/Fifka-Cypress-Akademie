import { HomePage } from "../../../page-objects/eshop/home_page";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../../../page-objects/eshop/registration_page";

describe('Register new user on eshop test', () => {

    it('Open registration page, fill registration form and submit test', () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.exampleEmail();
        const telephoneNumber = "+420 " + faker.phone.number();
        const password = faker.internet.password({ length: 10 });

        new HomePage()
        .openHomepage()
        .clickMyAccount()
        .clickRegistration()
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeEmail(email)
        .typeTelephoneNumber(telephoneNumber)
        .typePassword(password)
        .typeConfirmPassword(password)
        .clickContinue(); // Vrátí se chyba, protože není zakliknuté tlačítko Privacy Policy
    });
});