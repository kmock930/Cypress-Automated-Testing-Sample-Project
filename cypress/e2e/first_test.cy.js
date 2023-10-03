/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://google.com');
});

it('Sample test', () => {
    cy.get('.SDkEP', {timeout: 6000}).type('Kelvin Mock{enter}'); //custom timeout (default is 4000ms)
    cy.wait(1000); //hardcoded wait time
    cy.contains('Videos').click();
    
    //implicit assertions
    cy.get('.SDkEP', {timeout: 6000}).should('contain', 'Kelvin Mock');

    //explicit assertions (no logs produced)
    expect(true).to.be.true;

    assert.strictEqual(true,true);
});