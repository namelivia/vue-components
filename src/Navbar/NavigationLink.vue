<template lang="pug">
a(:href="href" :class="linkClass" aria-current="page")
  | {{ text }}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "NavigationLink",
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
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.regular-link {
  color: #d1d5db;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.regular-link:hover {
  background-color: #374151;
  color: #ffffff;
}
</style>
