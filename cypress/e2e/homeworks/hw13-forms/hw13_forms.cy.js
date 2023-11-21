import { HomePage } from "../../../page-objects/automationteststore/home_page";
import { faker } from "@faker-js/faker";

describe('Create new account tests', () => {
    it('Get to register page, fill form, confirm and check login', () => {
        const firstName = faker.person.firstName('male');
        const lastName = faker.person.lastName('male');
        const email = faker.internet.exampleEmail();
        const telephone = faker.phone.number();
        const fax = faker.phone.number();
        const company = faker.company.bs();
        const address1 = faker.location.streetAddress();
        const address2 = faker.location.secondaryAddress();
        const city = faker.location.city();
        const zipcode = faker.location.zipCode('### ##');
        const loginName = firstName;
        const password = faker.internet.password({length: 10});
        const passwordConfirm = password;


        new HomePage()
        .openStore()
        .clickLoginOrRegisterButton()
        .clickContinueButton()
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeEmail(email)
        .typeTelephone(telephone)
        .typeFax(fax)
        .typeCompany(company)
        .typeAddress1(address1)
        .typeAddress2(address2)
        .typeCity(city)
        .typeZipcode(zipcode)
        .selectCountry("Czech Republic")
        .selectRegion("Vysocina")
        .typeLoginName(loginName)
        .typePassword(password)
        .typePasswordConfirm(passwordConfirm)
        .clickSubscribeNo()
        .clickPrivacyPolicyCheckbox()
        .clickContinueButton()
        .confirmAccountCreation();
    });
});