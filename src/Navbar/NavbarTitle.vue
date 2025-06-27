<template lang="pug">
a(:href="href" class="title-container")
  img(
    class="logo-small"
    :src="imageSmall"
    :alt="title"
  )
  img(
    class="logo-big"
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
<style scoped>
.title-container {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.logo-small {
  display: block;
  height: 2rem;
  width: auto;
}

.logo-big {
  display: none;
  height: 2rem;
  width: auto;
}

@media (min-width: 1024px) {
  .logo-small {
    display: none;
  }
  .logo-big {
    display: block;
  }
}


</style>
