describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Go to About page').click()
  })
})