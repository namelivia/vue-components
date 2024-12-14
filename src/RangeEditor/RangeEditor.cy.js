import RangeEditor from './RangeEditor.vue'

describe('<RangeEditor />', () => {

  it('should properly render', () => {
      cy.mount(RangeEditor, {
          props: {
              ranges: [
                  { start: 0, end: 10 },
                  { start: 20, end: 30 },
                  { start: 40, end: 50 },
                  { start: 50, end: 60 },
                  { start: 70, end: 80 },
                  { start: 90, end: 100 },
              ]
          }
      })
  })

})
