<template lang="pug">
div(class="card-grid")
  slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardGrid',
})
</script>
<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

@media (min-width: 1024px) {
  .card-grid {
    justify-content: space-between;
  }
}
</style>
