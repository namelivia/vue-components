import Navbar from './Navbar.vue';

export default {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    links: [
        { text: 'Home', href: '/home', current: true },
        { text: 'About', href: '/about', current: false },
        { text: 'Contact', href: '/contact', current: false },
    ],
    locale: 'en',
    currentUserEmail: 'foo@bar.com',
    currentUserName: 'Foo Bar',
    currentUserPicture: 'https://picsum.photos/128/128',
    title: 'My Application',
    imageBig: 'https://picsum.photos/640/480',
    imageSmall: 'https://picsum.photos/128/128',
  },
};
