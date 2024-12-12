<template lang="pug">
a(:href="href" class="flex-shrink-0 flex items-center")
  img(
    class="block lg:hidden h-8 w-auto"
    :src="imageSmall"
    :alt="title"
  )
  img(
    class="hidden lg:block h-8 w-auto"
    :src="imageBig"
    :alt="title"
  )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "NavbarTitle",
  props: {
    href: {
      type: String,
    },
    title: {
      type: String,
    },
    imageBig: {
      type: String,
    },
    imageSmall: {
      type: String,
    },
  }
})
</script>
