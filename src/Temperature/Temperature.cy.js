import Temperature from './Temperature.vue'

describe('<Temperature />', () => {

  it('should properly render', () => {
      cy.mount(Temperature, {
        props: {
          title: "Current temperature",
          min: 19.10,
          avg: 26.02,
          max: 33.21
        }
      })
      cy.contains('Current temperature').should('be.visible');

      cy.contains('19.10 ℃').should('be.visible');
      cy.contains('26.02 ℃').should('be.visible');
      cy.contains('33.21 ℃').should('be.visible');

  })

})
