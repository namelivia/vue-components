<template lang="pug">
.wrapper
  .title
    | {{title}}
  .avg
    | {{avgFormatted}} ℃
  .minmax
    .min
      | {{minFormatted}} ℃
    .separator
      | —
    .max
      | {{maxFormatted}} ℃
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Temperature",
  props: {
    title: String,
    min: Number,
    max: Number,
    avg: Number
  },
  computed: {
    minFormatted() {
      return this.min.toFixed(2);
    },
    avgFormatted() {
      return this.avg.toFixed(2);
    },
    maxFormatted() {
      return this.max.toFixed(2);
    },
  },
})
</script>
<style scoped>
.wrapper {
    flex-direction: column;
    display: inline-flex;
}
.avg {
    display: flex;
    font-size: var(--font-size-xlarge);
    justify-content: center;
}
.title {
    display: flex;
    font-size: var(--font-size-base);
    justify-content: center;
}
.minmax {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: var(--font-size-base);
}
</style>
