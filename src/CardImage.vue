<template lang="pug">
img(class="w-full" :src="src" :alt="alt" ref="image")
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
  mounted: function () {
    this.$emit('width', this.calculateWidth())
  },
})
</script>
