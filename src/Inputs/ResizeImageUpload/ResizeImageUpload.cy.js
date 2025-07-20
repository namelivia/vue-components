import ResizeImageUpload from './ResizeImageUpload.vue'

describe('<ResizeImageUpload />', () => {
  it('should properly render', () => {
    cy.mount(ResizeImageUpload, {
      props: {
        id: 'image-input',
        required: true,
        placeholder: 'Image',
        dropPlaceholder: 'Drop image here',
        label: 'Image',
        file: null,
      },
    })
    cy.get('div').should('exist')
  })
  //TODO: Add more tests
})
