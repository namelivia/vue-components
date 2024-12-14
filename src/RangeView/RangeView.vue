<template lang="pug">
div.ranges-editor
    div.range(v-for="range in ranges" :key="range.id")
        span {{range.start}}-{{range.end}}
        div.gap
        span.label {{ range.label }}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "RangeView",
  props: {
    ranges: Array,
  },
});
</script>

<style scoped>
.ranges-editor {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.range {
    min-width: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.gap {
    height: 10px;
    width: auto;
    background-color: red;
    border: 1px solid black;
}
.label {
    margin-top: 5px;
}
</style>
