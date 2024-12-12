<template lang="pug">
span(class="badge")
  | {{text}}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Badge",
  props: {
    text: String,
  },
})
</script>
<style scoped>
.badge {
  background-color: #bfdbfe;
  color: #1e3a8a;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.5rem;
  padding: 0.125rem 0.625rem;
  border-radius: 0.25rem;
  display: inline-block;
}

.dark .badge {
  background-color: #e0f2fe;
  color: #1e3a8a;
}
</style>
