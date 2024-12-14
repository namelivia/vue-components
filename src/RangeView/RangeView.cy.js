import RangeView from './RangeView.vue'

describe('<RangeView />', () => {

  it('should properly render', () => {
      cy.mount(RangeView, {
          props: {
              ranges: [
                  { start: 0, end: 10, label: 'one' },
                  { start: 10, end: 20, label: 'two' },
                  { start: 20, end: 30, label: 'three' },
                  { start: 30, end: 40, label: 'four' },
                  { start: 40, end: 50, label: 'five'},
              ]
          }
      })
  })

})
