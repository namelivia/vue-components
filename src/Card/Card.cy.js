import Card from './Card.vue'

describe('<Card />', () => {

  it('should properly render', () => {
      cy.mount(Card, {
          slots: {
              default:() => "Test Card"
          }
      })
      cy.get('div').should('exist')
      cy.get('div').should('contain.text', 'Test Card')
  })

})
