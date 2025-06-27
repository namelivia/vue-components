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

    it('Should not show links and show the mobile menu when the screen is small', () => {
        cy.viewport('iphone-6')
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
        cy.get('.links-container').should('not.be.visible')
        cy.get('.menu-button').should('be.visible')
        cy.get('.menu-button').click()
        cy.get('#mobile-menu').should('be.visible')
    })

    it('Should show links when the screen is big and not show the mobile-menu', () => {
        cy.viewport('macbook-15')
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
        cy.get('.links-container').should('be.visible')
        cy.get('.menu-button').should('not.be.visible')
    })
})

