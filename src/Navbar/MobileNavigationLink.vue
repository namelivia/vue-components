<template lang="pug">
a(:href="href" :class="linkClass" aria-current="page")
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
        return 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
      }
      return 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
    },
  },
})
</script>
