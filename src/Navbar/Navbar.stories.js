import Navbar from './Navbar.vue';

export default {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ],
    locale: 'en',
    currentUserEmail: 'foo@bar.com',
    currentUserName: 'Foo Bar',
    currentUserPicture: 'https://example.com/avatar.jpg',
    title: 'My Application',
    imageBig: 'https://example.com/logo-big.png',
    imageSmall: 'https://example.com/logo-small.png',
  },
};
