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
  font-weight: var(--font-weight-bold);
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.reset-button:hover {
  background-color: var(--color-reset-hover);
}
</style>
