import CardBody from './CardBody.vue'

describe('<CardBody />', () => {

  it('should properly render', () => {
      cy.mount(CardBody, {
        slots: {
            default:() => "Test CardBody"
        },
        props: {
          title: 'Card Title'
        }
      })
      cy.get('div').contains('Test CardBody')
      cy.get('div').contains('Card Title')
  })

})
