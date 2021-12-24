/// <reference types="Cypress" />

class signIn {

    elements = {
        pageHeader: () => cy.get('h1'),
        emailInputField: () => cy.get('#email'),
        passwordInputField: () => cy.get('#password'),
        submitBtn: () => cy.get('#submit'),
        signUpBtn: () => cy.get('#signup'),
    }


    checkPageHeader() {
        this.elements.pageHeader().should("have.text", "Contact List App");
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

    clickSignUpBtn() {
        this.elements.signUpBtn().click({ force: true });
    }

}

module.exports = new signIn();