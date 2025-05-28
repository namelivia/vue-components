<template lang="pug">
button(type="reset" class="reset-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ResetButton",
  props: {
    text: String,
  },
});
</script>

<style scoped>
.reset-button {
  background-color: var(--color-reset);
  color: var(--color-reset-text);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.reset-button:hover {
  background-color: var(--color-reset-hover);
}
</style>
