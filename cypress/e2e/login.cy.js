/// <reference types = "cypress" />

const login = () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('username'));
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Cypress.env('password'));
    cy.get('.oxd-button').click();
};

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
});

it("Test Login Page", () => {
    login();
});

it.only("Test Admin button from Sidebar", () => {
    login();
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();

    cy.get('.orangehrm-header-container > .oxd-button').click();

    cy.get('.oxd-button--secondary').click();

    //assertions
    cy.get('.oxd-userdropdown-tab', {timeout: 6000})
        .should('have.class','oxd-userdropdown-tab')
        .should('be.visible');
});