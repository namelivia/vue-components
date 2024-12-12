import CheckBoxInput from './CheckBoxInput.vue'

describe('<CheckBoxInput />', () => {

  it('should properly render', () => {
      cy.mount(CheckBoxInput, {
        props: {
            id: 'checkbox',
            required: true,
            placeholder: 'placeholder',
            label: 'label',
            checked: true
        }
      })
  })
  //TODO: Add more tests
})
