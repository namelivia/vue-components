import CardGrid from './CardGrid.vue'

describe('<CardGrid />', () => {
  it('should properly render', () => {
    cy.mount(CardGrid, {
      slots: {
        default: () => 'Here there will be cards',
      },
    })
    cy.get('.card-grid').should('exist')
  })
})
