<template lang="pug">
div(class="links-container")
  div(class="links-wrapper")
    navigation-link(
      v-for="link in links"
      :key="link.id"
      :href="link.href"
      :text="link.text"
    )
</template>
<script lang="js">
import NavigationLink from './NavigationLink.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: "NavigationLinks",
  components: {
    NavigationLink: NavigationLink,
  },
  props: {
    links: {
      type: Array,
    },
  },
})
</script>
<style scoped>
.links-container {
  display: none;             /* hidden */
}

.links-wrapper {
  display: flex;             /* flex */
  gap: 1rem;                 /* space-x-4 = 16px horizontal gap between children */
}

@media (min-width: 640px) {  /* sm:block and sm:ml-6 */
  .links-container {
    display: block;
    margin-left: 1.5rem;     /* ml-6 = 24px */
  }
}
</style>
