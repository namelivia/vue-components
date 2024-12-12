import SecondaryButton from './SecondaryButton.vue'

describe('<SecondaryButton />', () => {

  it('should properly render', () => {
      cy.mount(SecondaryButton, {
          props: {
              text: 'Click me'
          }
      })
  })
  //TODO: Add more tests

})
