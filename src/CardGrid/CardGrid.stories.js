import CardGrid from './CardGrid.vue'
import Card from '../Card/Card.vue'

export default {
  title: 'CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
}
export const Default = {
  render: () => ({
    components: { CardGrid, Card },
    template: `
      <CardGrid>
          <Card title="Card Title" image="https://picsum.photos/640/480">
            <p>This is the one card.</p>
          </Card>
          <Card title="Card Title 2" image="https://picsum.photos/640/480?2">
            <p>This is the second card.</p>
           </Card>
           <Card title="Card Title 3" image="https://picsum.photos/640/480?3">
             <p>This is the third card.</p>
           </Card>
       </CardGrid>
    `,
  }),
}
