import Selector from './Selector.vue';

export default {
  title: 'Inputs/Selector',
  component: Selector,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    id: 'selector',
    disabled: false,
    initialValue: 'option1',
    label: 'Select an option',
    options: [
      { value: '', text: 'Please select an option', disabled: true },
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
    ],
  },
};
