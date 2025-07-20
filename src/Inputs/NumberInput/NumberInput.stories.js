import NumberInput from './NumberInput.vue'

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    id: 'number-input',
    required: false,
    disabled: false,
    placeholder: 'Enter a number',
    label: 'Number Input',
    amount: 0,
    min: '0',
    step: '1',
  },
}
