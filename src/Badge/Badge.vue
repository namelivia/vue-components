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
  background-color: var(--color-badge);
  color: var(--color-badge-text);
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.5rem;
  padding: 0.125rem 0.625rem;
  border-radius: 0.25rem;
  display: inline-block;
}

.dark .badge {
  background-color: var(--color-badge-dark);
  color: var(--color-badge-dark-text);
}
</style>
