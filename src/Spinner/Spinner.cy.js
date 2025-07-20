import Spinner from './Spinner.vue'

describe('<Spinner />', () => {
  it('should properly render', () => {
    cy.mount(Spinner)
    cy.get('div').should('exist')
  })
})
