<template lang="pug">
h1(class="section-title") {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
});
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 3.75rem;
  line-height: 1.5;
}
</style>
