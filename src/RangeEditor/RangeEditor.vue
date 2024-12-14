<template lang="pug">
div
  h1(class="range-editor-text") RangeEditor
  h2(class="range-editor-text") Min: {{ min }}
  h3(class="range-editor-text") Max: {{ max }}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "RangeEditor",
  props: {
    min: Number,
    max: Number,
  },
});
</script>

<style scoped>
.range-editor-text {
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
</style>
