import Container from './Container.vue'

export default {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
}
export const Default = {
  render: () => ({
    components: { Container },
    template: `
      <Container>
        <div style="background-color: #f0f0f0;">
            <h2>Container Content</h2>
            <p>This is some content inside the container.</p>
        </div>
      </Container>
    `,
  }),
}
