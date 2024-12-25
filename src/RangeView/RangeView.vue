<template lang="pug">
div.ranges-editor
    div.range(v-for="range,index in ranges" :key="range.id")
        div.labels
            span.label {{ index < ranges.length - 1 ? range.max : '&nbsp;' }}
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
    flex-grow: 1;
}
.labels {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
