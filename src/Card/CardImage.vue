<template lang="pug">
img(:src="src" :alt="alt" ref="image")
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CardImage",
  props: {
    src: String,
    alt: String,
  },
  data: function () {
    return {
      imageWidth: 0,
    }
  },
  methods: {
    calculateWidth() {
      return this.$refs.image.clientWidth
    },
  },
  emits: ['width'],
  mounted: function () {
    this.$emit('width', this.calculateWidth())
  },
})
</script>
<style scoped>
    img {
      width: 100%;
    }
</style
