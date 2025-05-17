import ImageInput from './ImageInput.vue'

describe('<ImageInput />', () => {

  it('should properly render', () => {
      cy.mount(ImageInput, {
          props: {
            id: 'image-input',
            required: true,
            placeholder: 'Image',
            dropPlaceholder: 'Drop image here',
            label: 'Image',
            file: null

          }
      })
      cy.get('div').should('exist')
  })
  //TODO: Add more tests

})
