import Selector from './Selector.vue'

describe('<Selector />', () => {

  it('should properly render', () => {
      cy.mount(Selector, {
          props: {
              id: 'selector',
              disabled: false,
              label: 'Selector',
              initialValue: 'value1',
              options: [
                  { value: 'value1', text: 'Value 1' },
                  { value: 'value2', text: 'Value 2' },
                  { value: 'value3', text: 'Value 3' }
              ]
          }
      })
  })

})
