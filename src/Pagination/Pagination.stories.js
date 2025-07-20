import Pagination from './Pagination.vue'

export default {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    showPrevious: true,
    previousLink: '#',
    nextLink: '#',
  },
}
