import RangeView from './RangeView.vue'

export default {
  title: 'RangeView',
  component: RangeView,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    ranges: [
      { start: 0, end: 10, label: 'Range 1' },
      { start: 11, end: 20, label: 'Range 2' },
      { start: 21, end: 30, label: 'Range 3' },
    ],
  },
}
