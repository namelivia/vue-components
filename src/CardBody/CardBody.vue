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
  padding: 1.5rem 1.5rem;
}

.card-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #4a5568;
  font-size: 1rem;
}
</style>

