import DangerButton from './DangerButton.vue'

describe('<DangerButton />', () => {
  it('should properly render', () => {
    cy.mount(DangerButton, {
      props: {
        text: 'Click me',
      },
    })
  })
  //TODO: Add more tests
})
