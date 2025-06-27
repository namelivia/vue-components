import Navbar from './Navbar.vue';

export default {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
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
