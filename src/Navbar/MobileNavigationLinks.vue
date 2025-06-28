<template lang="pug">
transition(
  enter-active-class="fade-scale-enter-active"
  leave-active-class="fade-scale-leave-active"
  enter-from-class="fade-scale-enter-from"
  enter-to-class="fade-scale-enter-to"
  leave-from-class="fade-scale-leave-from"
  leave-to-class="fade-scale-leave-to"
)
  div(id="mobile-menu" v-if="open")
    div(class="menu-panel")
      mobile-navigation-link(
        v-for="link in links"
        :key="link.id"
        :href="link.href"
        :text="link.text"
      )
</template>
<script lang="js">
import MobileNavigationLink from './MobileNavigationLink.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: "MobileNavigationLinks",
  components: {
    MobileNavigationLink: MobileNavigationLink,
  },
  props: {
    links: {
      type: Array,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 200ms ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  transform: scaleY(0);
  transform-origin: top;
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  transform: scaleY(1);
  transform-origin: top;
}
#mobile-menu {
  display: block;
}
.menu-panel {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: #1f2937;
}
@media (min-width: 640px) {
  #mobile-menu {
    display: none;
  }
}
</style>
