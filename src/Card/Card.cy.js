import Card from './Card.vue'

describe('<Card />', () => {
  it('renders default slot content', () => {
    cy.mount(Card, {
      props: {
        image: 'test.jpg',
        title: 'Test Title',
      },
      slots: {
        default: () => 'Test Card Content',
      },
    })

    cy.get('.card-container').should('exist')
    cy.get('.card-body').should('contain.text', 'Test Card Content')
  })

  it('renders the image with correct src and alt', () => {
    const image = 'https://example.com/image.jpg'
    const title = 'Card Title'

    cy.mount(Card, {
      props: { image, title },
    })

    cy.get('img')
      .should('have.attr', 'src', image)
      .and('have.attr', 'alt', title)
  })

  it('renders the title correctly in card-body', () => {
    cy.mount(Card, {
      props: {
        title: 'Expected Title',
      },
    })

    cy.get('.card-body').should('contain.text', 'Expected Title')
  })

  it('does not render when dismissed is true', () => {
    cy.mount(Card, {
      props: {
        dismissed: true,
      },
    })

    cy.get('.card-container').should('not.exist')
  })
})
