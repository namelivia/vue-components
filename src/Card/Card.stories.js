import Card from './Card.vue'

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    title: 'Card Title',
    image: 'https://picsum.photos/640/480',
    dismissed: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <p>This is the content of the card.</p>
      </Card>
    `,
  }),
}
