<template lang="pug">
span(class="badge")
  | {{text}}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Badge',
  props: {
    text: String,
  },
})
</script>
<style scoped>
.badge {
  background-color: var(--color-badge);
  color: var(--color-badge-text);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-right: var(--badge-margin-right);
  padding: var(--badge-padding);
  border-radius: var(--badge-border-radius);
  display: inline-block;
}

.dark .badge {
  background-color: var(--color-badge-dark);
  color: var(--color-badge-dark-text);
}
</style>
