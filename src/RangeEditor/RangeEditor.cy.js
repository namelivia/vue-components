import RangeEditor from './RangeEditor.vue'

describe('<RangeEditor />', () => {

  it('should properly render', () => {
      cy.mount(RangeEditor, {
          props: {
              min: 0,
              max: 100,
          }
      })
  })

})
