<template lang="pug">
div(class="card-container")
  div(class="card")
    slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Card"
})
</script>
<style scoped>
.card-container {
  margin: 2rem;
}

.card {
  max-width: 24rem;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--color-card-shadow);
}
</style>
