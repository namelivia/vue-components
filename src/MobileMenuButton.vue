<template lang="pug">
button(
  type="button"
  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  v-on:click="onClick"
)
  svg(
    class="block h-6 w-6"
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
  name: "MobileMenuButton",
  props: {
    open: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    }
  }
})
</script>
