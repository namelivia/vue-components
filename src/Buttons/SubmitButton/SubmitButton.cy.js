import SubmitButton from './SubmitButton.vue'

describe('<SubmitButton />', () => {

  it('should properly render', () => {
      cy.mount(SubmitButton, {
          props: {
              text: 'Click me'
          }
      })
  })
  //TODO: Add more tests

})
