/// <reference types="Cypress" />

class contactList {

    elements = {
        pageHeader: () => cy.get('h1'),
        logoutBtn: () => cy.get('[id="logout"]'),
        addNewContactBtn: () => cy.get('#add-contact'),
        contactInfoRow: () => cy.get('.contactTableBodyRow')
    }

    checkPageHeader() {
        this.elements.pageHeader().should("have.text", "Contact List");
    }

    clickAddNewContactBtn() {
        this.elements.addNewContactBtn().click();
    }

    clickLogoutBtn() {
        this.elements.logoutBtn().click();
    }



}

module.exports = new contactList();