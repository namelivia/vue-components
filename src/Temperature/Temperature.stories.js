import Temperature from './Temperature.vue';

export default {
  title: 'Temperature',
  component: Temperature,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    title: "Current temperature",
    min: 19.10,
    avg: 26.02,
    max: 33.21
  },
};
