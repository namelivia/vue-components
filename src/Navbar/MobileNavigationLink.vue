<template lang="pug">
a(:href="linkDestination" :class="linkClass" aria-current="page")
  | {{ text }}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "MobileNavigationLink",
  props: {
    text: {
      type: String,
    },
    href: {
      type: String,
    },
    current: {
      type: Boolean,
    },
  },
  computed: {
    linkClass: function () {
      if (this.current) {
        return 'current-link'
      }
      return 'regular-link'
    },
    linkDestination: function () {
      return this.current ? '#' : this.href
    },
  },
})
</script>
<style scoped>
.current-link {
  background-color: var(--color-navbar-current-background);
  color: var(--color-navbar-text);
  display: block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-size: var(--font-size-navbar);
  text-decoration: none;
  cursor: default;
}
.regular-link {
  color: var(--color-navbar-text);
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: var(--font-size-navbar);
  transition: background-color 0.2s ease, color 0.2s ease;
  text-decoration: none;
}

.regular-link:hover {
  background-color: var(--color-navbar-link-background);
}
</style>
