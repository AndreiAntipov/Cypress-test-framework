/// <reference types="Cypress" />

class registration {

    elements = {
        pageHeader: () => cy.get('h1'),
        firstNameField: () => cy.get('#firstName'),
        lastNameField: () => cy.get('#lastName'),
        emailInputField: () => cy.get('#email'),
        passwordInputField: () => cy.get('#password'),
        submitBtn: () => cy.get('#submit'),
        cancelBtn: () => cy.get('#cancel')
    }

    checkPageHeader() {
        this.elements.pageHeader().should("have.text", "Add User");
    }

    enterFirstName(firstName) {
        this.elements.firstNameField().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastNameField().type(lastName);
    }

    enterEmail(email) {
        this.elements.emailInputField().type(email);
    }

    enterPassword(password) {
        this.elements.passwordInputField().type(password);
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click();
    }

    clickCancelBtn() {
        this.elements.cancelBtn().click();
    }

}

module.exports = new registration();