import RegularButton from './RegularButton.vue'

describe('<RegularButton />', () => {

  it('should properly render', () => {
      cy.mount(RegularButton, {
          props: {
              text: 'Click me'
          }
      })
  })
  //TODO: Add more tests

})
