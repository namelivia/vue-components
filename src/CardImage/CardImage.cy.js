import CardImage from './CardImage.vue'

describe('<CardImage />', () => {

  it('should properly render', () => {
      cy.mount(CardImage, {
        props: {
            src: 'https://via.placeholder.com/150',
            alt: 'placeholder',
        }
      })
      cy.get('img').should('have.attr', 'src', 'https://via.placeholder.com/150')
      cy.get('img').should('have.attr', 'alt', 'placeholder')
  })

  //TODO: Test the width event when the image is loaded

})
