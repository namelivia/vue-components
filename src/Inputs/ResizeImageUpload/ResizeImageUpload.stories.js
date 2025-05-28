import ResizeImageUpload from './ResizeImageUpload.vue';

export default {
  title: 'Inputs/ResizeImageUpload',
  component: ResizeImageUpload,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    id: 'resize-image-input',
    required: false,
    placeholder: 'Resize image input',
    dropPlaceholder: 'Drop an image here or click to select',
    label: 'Image Input',
  },
};
