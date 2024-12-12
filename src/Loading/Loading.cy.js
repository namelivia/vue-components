import Loading from './Loading.vue'

describe('<Loading />', () => {

  it('should properly render', () => {
      cy.mount(Loading, {
          slots: {
              default:() => "Test Loading"
          }
      })
      cy.get('div').should('exist')
  })

})
