import TextInput from './TextInput.vue'

describe('<TextInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TextInput)
  })
})