import SectionTitle from './SectionTitle.vue'

describe('<SectionTitle />', () => {

  it('should properly render', () => {
      cy.mount(SectionTitle, {
          props: {
              text: 'Test Title'
          }
      })
      cy.get('h1').should('have.text', 'Test Title')
  })

})
