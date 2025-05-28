import TextInput from './TextInput.vue';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    id: 'text-input',
    required: false,
    disabled: false,
    placeholder: 'Enter text here',
    label: 'Text Input',
    text: '',
  },
};
