<template lang="pug">
h1.text-center.text-6xl.leading-relaxed {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>
