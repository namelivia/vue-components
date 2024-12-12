import MobileMenuButton from './MobileMenuButton.vue'

describe('<MobileMenuButton />', () => {

  it('should properly render', () => {
      cy.mount(MobileMenuButton, {
          props: {
              open: false
          }
      })
  })

})
