import TextInput from './TextInput.vue'

describe('<TextInput />', () => {

  it('should properly render a label', () => {
      cy.mount(TextInput, {
        props: {
          label: 'Name'
        }
      })
      cy.get('label').should('have.text', 'Name')
  })
  it('should properly render a placeholder', () => {
      cy.mount(TextInput, {
        props: {
          placeholder: 'Enter your name'
        }
      })
      cy.get('input').should('have.attr', 'placeholder', 'Enter your name')
  })
  it('should properly render a value', () => {
      cy.mount(TextInput, {
        props: {
          text: 'John Doe'
        }
      })
      cy.get('input').should('have.value', 'John Doe')
  })
  it('should disallow input when disabled', () => {
      cy.mount(TextInput, {
        props: {
          disabled: true
        }
      })
      cy.get('input').should('be.disabled')
  })
})
