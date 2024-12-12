<template lang="pug">
div(class="hidden sm:block sm:ml-6")
  div(class="flex space-x-4")
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
