import RegularButton from './RegularButton.vue'

describe('<RegularButton />', () => {
  it('should display text', () => {
    cy.mount(RegularButton, {
      props: {
        text: 'Click me',
      },
    })
    cy.get('button').should('contain.text', 'Click me')
  })

  it('clicking the button fires a click event', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(RegularButton, {
      props: { text: 'Click me', onClick: onClickSpy },
    })
    cy.get('button').click()
    cy.get('@onClickSpy').should('have.been.called')
  })

  it('when the button is loading, should show the loading text and be disabled', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(RegularButton, {
      props: {
        text: 'Click me',
        loading: true,
        textWhileLoading: 'Loading...',
        onClick: onClickSpy,
      },
    })
    cy.get('button').should('not.contain.text', 'Click me')
    cy.get('button').should('contain.text', 'Loading...')
    cy.get('button').should('be.disabled')
  })
})
