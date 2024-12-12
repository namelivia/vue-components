import NumberInput from './NumberInput.vue'

describe('<NumberInput />', () => {

  it('should properly render', () => {
      cy.mount(NumberInput, {
          props: {
              id: 'test',
              required: true,
              disabled: false,
              placeholder: 'test',
              label: 'test',
              amount: 0,
              min: 0,
              step: 1,
          }
      })
  })
  //TODO: Add tests for the input

})
