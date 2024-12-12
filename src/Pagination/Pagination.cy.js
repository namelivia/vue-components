import Pagination from './Pagination.vue'

describe('<Pagination />', () => {

  it('should properly render', () => {
      cy.mount(Pagination, {
          props: {
              previousLabel: 'Previous',
              nextLabel: 'Next',
              showPrevious: true,
              previousLink: '#/previous',
              nextLink: '#/next',
          }
      })
      cy.get('div').should('exist')
  })

})
