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
  display: none;
}

.links-wrapper {
  display: flex;
  gap: 1rem;
}

@media (min-width: 640px) {
  .links-container {
    display: block;
    margin-left: 1.5rem;
  }
}
</style>
