import ImageInput from './ImageInput.vue';

export default {
  title: 'Inputs/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    id: 'image-input',
    required: false,
    placeholder: 'Image input',
    dropPlaceholder: 'Drop an image here or click to select',
    label: 'Image Input',
  },
};
