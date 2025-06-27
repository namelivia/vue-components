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
  background-color: #111827;   /* bg-gray-900 */
  color: #ffffff;              /* text-white */
  display: block;              /* block */
  padding-left: 0.75rem;       /* px-3 = 12px */
  padding-right: 0.75rem;
  padding-top: 0.5rem;         /* py-2 = 8px */
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;     /* rounded-md = 6px */
  font-size: 1rem;             /* text-base = 16px */
  font-weight: 500;            /* font-medium */
}
.regular-link {
  color: #d1d5db;              /* text-gray-300 */
  display: block;              /* block */
  padding: 0.5rem 0.75rem;     /* py-2 px-3 = 8px 12px */
  border-radius: 0.375rem;     /* rounded-md = 6px */
  font-size: 1rem;             /* text-base = 16px */
  font-weight: 500;            /* font-medium */
  transition: background-color 0.2s ease, color 0.2s ease;
}

.regular-link:hover {
  background-color: #374151;   /* hover:bg-gray-700 */
  color: #ffffff;              /* hover:text-white */
}
</style>
