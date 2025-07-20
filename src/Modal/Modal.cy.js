import Modal from './Modal.vue'

describe('<Modal />', () => {
  it('should properly render', () => {
    cy.mount(Modal, {
      props: {
        open: true,
      },
    })
    cy.get('div').should('exist')
  })
})
