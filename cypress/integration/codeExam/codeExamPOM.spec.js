
/// <reference types="Cypress" />

import signIn from '../codeExam/pageObjects/signIn'
import registration from '../codeExam/pageObjects/registration'
import contactList from '../codeExam/pageObjects/contactList'
import helper from '../codeExam/pageObjects/helper'
import addContact from '../codeExam/pageObjects/addContact'


describe('End to End Testing(registration - signin - add contact - logout) using POM', () => {

    // set new user variables for testing
    const url = "https://thinking-tester-contact-list.herokuapp.com/"
    var email;
    var firstName;
    var lastName;
    var passwd;

    // get test data from json file for add contact flow
    const test = require("../codeExam/testData/contactInfo.json");

    // open page before testing (I believe we don't need to open page before each test for this flow)
    before(() => {
        cy.visit(url);
    });

    it('TC1: Register new account', () => {

        //check and go to registration form
        cy.title().should('contain', "Contact List App");
        signIn.checkPageHeader();
        signIn.clickSignUpBtn();
        registration.checkPageHeader();

        // set user random first name, last name and email variables
        firstName = helper.getRandomString(5);
        lastName = helper.getRandomString(5);
        email = firstName + "@fake.net";
        passwd = helper.getRandomAlphaNumString(8);

        // populate registration form and submit
        registration.enterFirstName(firstName);
        registration.enterLastName(lastName);
        registration.enterEmail(email);
        registration.enterPassword(passwd);
        registration.clickSubmitBtn();

        // store user credentials to json file, so can be used for future testing
        cy.writeFile("cypress/integration/codeExam/testData/user.json", { firstName: firstName, lastName: lastName, email: email, passwd: passwd })

        // check contact list header and logout
        contactList.checkPageHeader();
        contactList.clickLogoutBtn();
    });

    it('TC2: Login with new credentials and add new contact', () => {

        //login with new credentials
        cy.title().should('contain', "Contact List App");
        signIn.checkPageHeader();
        signIn.enterEmail(email);
        signIn.enterPassword(passwd);
        signIn.clickSubmitBtn();

        // check headers then add new contact
        contactList.checkPageHeader();
        contactList.clickAddNewContactBtn();
        addContact.checkPageHeader();

        //populate add contact form and submit
        addContact.enterFirstName(test.firstName);
        addContact.enterLastName(test.lastName);
        addContact.enterDateOfBirth(test.birthday);
        addContact.enterEmail(test.email);
        addContact.enterPhone(test.phone);
        addContact.enterStreetAddress1(test.address1);
        addContact.enterStreetAddress2(test.address2);
        addContact.enterCity(test.city);
        addContact.enterState(test.state);
        addContact.enterPostalCode(test.zip);
        addContact.enterCountry(test.country);
        addContact.clickSubmitBtn();

    });


    it('TC3: Then check new contact', () => {

        // check header
        contactList.checkPageHeader();

        // contact info verification
        contactList.elements.contactInfoRow()
            .should('contain', test.firstName + " " + test.lastName)
            .and('contain', test.birthday)
            .and('contain', test.email)
            .and('contain', test.phone)
            .and('contain', test.address1 + " " + test.address2)
            .and('contain', test.city + " " + test.state + " " + test.zip)
            .and('contain', test.country);

        // logout and check page title to be sure logout from system
        contactList.clickLogoutBtn();
        cy.title().should('contain', "Contact List App");
    });

});