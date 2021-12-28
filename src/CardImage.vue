<template>
  <img class="w-full" :src="src" :alt="alt" ref="image"/>
</template>

<script lang="js">
export default {
  props: {
    src: String,
    alt: String,
  },
}
</script>
