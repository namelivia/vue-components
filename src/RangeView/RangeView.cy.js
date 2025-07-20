import RangeView from './RangeView.vue'

describe('<RangeView />', () => {
  it('should properly render', () => {
    cy.mount(RangeView, {
      props: {
        ranges: [
          { max: 10, label: 'one' },
          { max: 20, label: 'two' },
          { max: 30, label: 'three' },
          { max: 40, label: 'four' },
          { max: 50, label: 'five' },
        ],
      },
    })
  })
})
