<template lang="pug">
button(
  type="button"
  class="menu-button"
  v-on:click="onClick"
)
  svg(
    class="menu-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  )
    path(
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    )
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MobileMenuButton',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    },
  },
})
</script>

<style scoped>
.menu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: var(--border-radius-big);
  color: var(--color-navbar-text);
  background-color: transparent;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  border: none;
  cursor: pointer;
}

.menu-icon {
  display: block;
  height: 1.5rem;
  width: 1.5rem;
}
</style>
