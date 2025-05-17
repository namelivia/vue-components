import ResetButton from './ResetButton.vue'

describe('<ResetButton />', () => {

  it('should properly render', () => {
      cy.mount(ResetButton, {
          props: {
              text: 'Click me'
          }
      })
  })
  //TODO: Add more tests

})
