import Container from './Container.vue'

describe('<Container />', () => {
  it('should properly render', () => {
    cy.mount(Container, {
      slots: {
        default: () => 'Test Container',
      },
    })
    cy.get('div').should('exist')
  })
})
