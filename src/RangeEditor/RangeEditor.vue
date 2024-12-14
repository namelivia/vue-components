<template lang="pug">
div.ranges-editor
    div.range(v-for="range in ranges" :key="range.id")
        span {{ range.start }} - {{ range.end }}
        div.gap
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "RangeEditor",
  props: {
    ranges: Array,
  },
});
</script>

<style scoped>
.ranges-editor {
  display: flex;
  flex-direction: row;
}
.range {
}
.gap {
    height: 10px;
    width: auto;
}
</style>
