<template>
  <img class="w-full" :src="src" :alt="alt" />
</template>

<script lang="js">
export default {
  props: {
    src: String,
    alt: String,
  },
}
</script>
