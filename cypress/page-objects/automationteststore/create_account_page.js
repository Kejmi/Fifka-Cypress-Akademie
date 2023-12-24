import { AccountCreatedPage } from "./account_created_page";

export class CreateAccountPage {
    constructor() {
        this.firstNameInput = "#AccountFrm_firstname";
        this.lastNameInput = "#AccountFrm_lastname";
        this.emailInput = "#AccountFrm_email";
        this.telephoneInput = "#AccountFrm_telephone";
        this.faxInput = "#AccountFrm_fax";
        this.companyInput = "#AccountFrm_company";
        this.address1Input = "#AccountFrm_address_1";
        this.address2Input = "#AccountFrm_address_2";
        this.cityInput = "#AccountFrm_city";
        this.regionSelect = "#AccountFrm_zone_id";
        this.zipcodeInput = "#AccountFrm_postcode";
        this.countrySelect = "#AccountFrm_country_id";
        this.loginNameInput = "#AccountFrm_loginname";
        this.passwordInput = "#AccountFrm_password";
        this.passwordConfirmInput = "#AccountFrm_confirm";
        this.subscribeRadioButtonNo = "#AccountFrm_newsletter0";
        this.privacyPolicyCheckBox = "#AccountFrm_agree";
        this.continueButton = "button[title='Continue']";
    }

    typeFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName);
        return this;
    }

    typeLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName);
        return this;
    }

    typeEmail(email) {
        cy.get(this.emailInput).type(email);
        return this;
    } 

    typeTelephone(telephone) {
        cy.get(this.telephoneInput).type(telephone);
        return this;
    }

    typeFax(fax) {
        cy.get(this.faxInput).type(fax);
        return this;
    }

    typeCompany(company) {
        cy.get(this.companyInput).type(company);
        return this;
    }

    typeAddress1(address1) {
        cy.get(this.address1Input).type(address1);
        return this;
    }

    typeAddress2(address2) {
        cy.get(this.address2Input).type(address2);
        return this;
    }

    typeCity(city) {
        cy.get(this.cityInput).type(city);
        return this;
    }

    selectRegion(region) {
        cy.get(this.regionSelect).select(region);
        return this;
    }

    typeZipcode(zipcode) {
        cy.get(this.zipcodeInput).type(zipcode);
        return this;
    }

    selectCountry(country) {
        cy.get(this.countrySelect).select(country);
        cy.wait(1000);
        return this;
    }

    typeLoginName(loginName) {
        cy.get(this.loginNameInput).type(loginName);
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    typePasswordConfirm(passwordConfirm) {
        cy.get(this.passwordConfirmInput).type(passwordConfirm);
        return this;
    }

    clickSubscribeNo() {
        cy.get(this.subscribeRadioButtonNo).click();
        return this;
    }

    clickPrivacyPolicyCheckbox() {
        cy.get(this.privacyPolicyCheckBox).click();
        return this;
    }

    clickContinueButton() {
        cy.get(this.continueButton).click();
        return new AccountCreatedPage();
    }
}
