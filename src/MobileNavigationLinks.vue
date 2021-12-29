<template>
  <transition
    enter-active-class="transition-all"
    leave-active-class="transition-all"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
    <div id="mobile-menu" class="sm:hidden" v-if="open">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <mobile-navigation-link
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          :text="link.text"
        />
      </div>
    </div>
  </transition>
</template>
<script>
import MobileNavigationLink from './MobileNavigationLink.vue'

export default {
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
}
</script>
