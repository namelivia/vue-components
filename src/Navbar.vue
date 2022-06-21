<template lang="pug">
nav(class="bg-gray-800")
  div(class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8")
    div(class="relative flex items-center justify-between h-16")
      div(class="absolute inset-y-0 left-0 flex items-center sm:hidden")
        mobile-menu-button(@click="onMobileMenuClick" :open="mobileMenuOpen")
      div(
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      )
        navbar-title(href="/" :title="title" :imageBig="imageBig" :imageSmall="imageSmall")
        navigation-links(:links="links")
      right-content(
        :locale="locale"
        :current-user-email="currentUserEmail"
      )
  mobile-navigation-links(:links="links" :open="mobileMenuOpen")
</template>
<script lang="js">
import MobileNavigationLinks from './MobileNavigationLinks.vue'
import NavigationLinks from './NavigationLinks.vue'
import NavbarTitle from './NavbarTitle.vue'
import RightContent from './RightContent.vue'
import MobileMenuButton from './MobileMenuButton.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: "Navbar",
  components: {
    NavbarTitle: NavbarTitle,
    NavigationLinks: NavigationLinks,
    MobileNavigationLinks: MobileNavigationLinks,
    RightContent: RightContent,
    MobileMenuButton: MobileMenuButton,
  },
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  props: {
    links: {
      type: Array,
    },
    locale: {
      type: String,
    },
    currentUserEmail: {
      type: String,
    },
    title: {
      type: String,
    },
    imageBig: {
      type: String,
    },
    imageSmall: {
      type: String,
    },
  },
  methods: {
    onMobileMenuClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
  }
})
</script>
