<template lang="pug">
nav(class="navbar")
  div(class="navbar-container")
    div(class="flex-header")
      div(class="menu-toggle")
        mobile-menu-button(@click="onMobileMenuClick" :open="mobileMenuOpen")
      div(
        class="title-container"
      )
        navbar-title(href="/" :title="title" :imageBig="imageBig" :imageSmall="imageSmall")
        navigation-links(:links="links")
      right-content(
        :locale="locale"
        :current-user-email="currentUserEmail"
        :current-user-name="currentUserName"
        :current-user-picture="currentUserPicture"
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
    currentUserName: {
      type: String,
    },
    currentUserPicture: {
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
<style scoped>
.navbar {
  background-color: #1f2937;
}

.navbar-container {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.flex-header {
  position: relative;            /* relative */
  display: flex;                 /* flex */
  align-items: center;           /* items-center */
  justify-content: space-between; /* justify-between */
  height: 4rem;
}

.menu-toggle {
  position: absolute;         /* absolute */
  top: 0;                     /* inset-y-0 sets top and bottom to 0 */
  bottom: 0;
  left: 0;                    /* left-0 */
  display: flex;              /* flex */
  align-items: center;        /* items-center */
}

.title-container {
  flex: 1 1 0%;                /* flex-1 */
  display: flex;              /* flex */
  align-items: center;        /* items-center */
  justify-content: center;    /* justify-center */
}

@media (min-width: 640px) {
  .navbar-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .menu-toggle {
    display: none; /* Hide menu toggle on larger screens */
  }
  .title-container {
    align-items: stretch; /* stretch */
    justify-content: flex-start;
  }
}

@media (min-width: 1024px) {
  .navbar-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
