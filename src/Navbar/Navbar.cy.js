import Navbar from './Navbar.vue'


const sizes = ['iphone-6', 'ipad-2', 'macbook-15']

describe('<Navbar />', () => {

    sizes.forEach((size) => {
        it(`Should render on ${size} screen`, () => {
            cy.viewport(size)
            cy.mount(Navbar, {
                props: {
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
                }
            })
        })

    })
})

