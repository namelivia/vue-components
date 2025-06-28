import '../styles/index.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'one',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'one', title: 'One Theme' },
        { value: 'another', title: 'Another Theme' },
      ],
    },
  },
};

export const decorators = [
  (story, context) => {
    const theme = context.globals.theme || 'one';

    return {
      components: { story },
      template: `<div :class="theme + '-theme'"><story /></div>`,
      setup() {
        return { theme };
      },
    };
  },
];
