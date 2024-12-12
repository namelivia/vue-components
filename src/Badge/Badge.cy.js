import Badge from './Badge.vue'

describe('<Badge />', () => {

  it('should properly render', () => {
      cy.mount(Badge, {
        props: {
          text: 'Name'
        }
      })
      cy.get('span').contains('Name')
  })

})
