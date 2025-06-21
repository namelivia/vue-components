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
  font-size: var(--font-size-xlarge);
  line-height: 1.5;
}
</style>
