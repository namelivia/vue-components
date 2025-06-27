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
  flex-shrink: 0;             /* flex-shrink-0 */
  display: flex;              /* flex */
  align-items: center;        /* items-center */
}

.logo-small {
  display: block;        /* block */
  height: 2rem;          /* h-8 = 32px */
  width: auto;           /* w-auto */
}

.logo-big {
  display: none;         /* hidden */
  height: 2rem;          /* h-8 = 32px */
  width: auto;           /* w-auto */
}

@media (min-width: 1024px) { /* lg:hidden */
  .logo-small {
    display: none;
  }
  .logo-big {
    display: block;
  }
}


</style>
