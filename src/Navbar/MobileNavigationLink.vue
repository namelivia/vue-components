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
        return 'current-link'
      }
      return 'regular-link'
    },
  },
})
</script>
<style scoped>
.current-link {
  background-color: #111827;
  color: #ffffff;
  display: block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
}
.regular-link {
  color: #d1d5db;
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.regular-link:hover {
  background-color: #374151;
  color: #ffffff;
}
</style>
