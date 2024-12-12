import StyledTable from './StyledTable.vue'

describe('<StyledTable />', () => {

  it('should properly render', () => {
      cy.mount(StyledTable, {
          slots: {
              default:() => "Test StyledTable"
          }
      })
      cy.get('div').should('exist')
  })

})
