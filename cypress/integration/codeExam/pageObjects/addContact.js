/// <reference types="Cypress" />

class addContact {

    elements = {
        pageHeader: () => cy.get('h1'),
        firstNameField: () => cy.get('#firstName'),
        lastNameField: () => cy.get('#lastName'),
        dateOfBirthField: () => cy.get('#birthdate'),
        emailInputField: () => cy.get('#email'),
        phoneField: () => cy.get('#phone'),
        streetAddress1Field: () => cy.get('#street1'),
        streetAddress2Field: () => cy.get('#street2'),
        cityField: () => cy.get('#city'),
        stateField: () => cy.get('#stateProvince'),
        postalCodeField: () => cy.get('#postalCode'),
        countryField: () => cy.get('#country'),
        submitBtn: () => cy.get('#submit'),
        cancelBtn: () => cy.get('#cancel')
    }

    checkPageHeader() {
        this.elements.pageHeader().should("have.text", "Add Contact");
    }

    enterFirstName(firstName) {
        this.elements.firstNameField().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastNameField().type(lastName);
    }

    enterDateOfBirth(dob) {
        this.elements.dateOfBirthField().type(dob);
    }

    enterEmail(email) {
        this.elements.emailInputField().type(email);
    }

    enterPhone(phone) {
        this.elements.phoneField().type(phone);
    }

    enterStreetAddress1(address) {
        this.elements.streetAddress1Field().type(address);
    }

    enterStreetAddress2(address) {
        this.elements.streetAddress2Field().type(address);
    }

    enterCity(city) {
        this.elements.cityField().type(city);
    }

    enterState(state) {
        this.elements.stateField().type(state);
    }

    enterPostalCode(zipCode) {
        this.elements.postalCodeField().type(zipCode);
    }

    enterCountry(country) {
        this.elements.countryField().type(country);
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click({ force: true });
    }

    clickCancelBtn() {
        this.elements.cancelBtn().click();
    }

}

module.exports = new addContact();