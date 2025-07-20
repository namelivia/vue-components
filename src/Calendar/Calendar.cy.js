import Calendar from './Calendar.vue'

describe('<Calendar />', () => {
  it('should properly render', () => {
    cy.mount(Calendar, {
      props: {
        text: 'Name',
      },
    })
    cy.get('span').contains('Name')
  })
})
