<template lang="pug">
div(class="card-body")
  div(class="card-title")
    | {{ title }}
  p(class="card-text")
    slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CardBody",
  props: {
    title: String,
  },
})
</script>
<style scoped>
.card-body {
  padding: var(--card-body-padding);
}

.card-title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  margin-bottom: var(--card-title-margin-bottom);
}

.card-text {
  color: var(--color-card-text);
  font-size: var(--font-size-base);
}
</style>

