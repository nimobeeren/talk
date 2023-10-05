describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.contains(/hoodie/i)
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .block > .justify-center > .relative').click();
    cy.get('[title="Size M"]').click();
    cy.get('.lg\\:basis-2\\/6 > .relative').click();
    cy.get('.p-1 > .block').click();
    cy.get('section.gap-2 > .flex > .w-full').clear('a');
    cy.get('section.gap-2 > .flex > .w-full').type('a@a.co');
    cy.get('.gap-3 > :nth-child(2) > :nth-child(1) > .w-full').clear();
    cy.get('.gap-3 > :nth-child(2) > :nth-child(1) > .w-full').type('Nimo');
    cy.get('.gap-3 > :nth-child(2) > :nth-child(2) > .w-full').clear();
    cy.get('.gap-3 > :nth-child(2) > :nth-child(2) > .w-full').type('Beeren');
    cy.get(':nth-child(3) > .w-full').clear();
    cy.get(':nth-child(3) > .w-full').type('Marconilaan 16');
    cy.get(':nth-child(4) > .w-full').clear();
    cy.get(':nth-child(4) > .w-full').type('iO Campus');
    cy.get(':nth-child(5) > :nth-child(1) > .w-full').clear();
    cy.get(':nth-child(5) > :nth-child(1) > .w-full').type('Eindhoven');
    cy.get(':nth-child(5) > :nth-child(2) > .w-full').clear();
    cy.get(':nth-child(5) > :nth-child(2) > .w-full').type('5612AA');
    cy.get(':nth-child(6) > .w-full').select('nl');
    cy.get('.justify-end > .rounded-xl').click();
    cy.get('.gap-3 > .flex > .w-full').select('ideal');
    cy.get('.gap-8 > :nth-child(2) > .flex > .w-full').select('asn');
    cy.get('.justify-end > .rounded-xl').click();
    cy.get('b').should('have.text', '[object Promise]');
    /* ==== End Cypress Studio ==== */
  })
})
