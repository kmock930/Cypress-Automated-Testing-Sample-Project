/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://google.com');
});

it('Sample test', () => {
    cy.get('.SDkEP', {timeout: 6000}).type('Kelvin Mock{enter}'); //custom timeout (default is 4000ms)
    cy.wait(1000); //hardcoded wait time
    cy.contains('Videos').click();
});