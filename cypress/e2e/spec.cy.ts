describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')

    
    // If we read it out loud, it might sound like:

    // Visit: https://example.cypress.io
    // Find the element with content: type
    // Click on it
    // Get the URL
    // Assert it includes: /commands/actions
    // Get the input with the action-email data-testid
    // Type fake@email.com into the input
    // Assert the input reflects the new value
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})