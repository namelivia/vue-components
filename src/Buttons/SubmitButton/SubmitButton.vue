<template lang="pug">
button(
    type="submit"
    class="submit-button"
    :disabled="disabled"
)
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "SubmitButton",
  props: {
    text: {
        type: String,
    },
    disabled: {
        type: Boolean,
    },
  },
});
</script>

<style scoped>
.submit-button {
  background-color: var(--color-submit);
  color: var(--color-submit-text);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: var(--color-submit-hover);
}

.submit-button:disabled {
  background-color: var(--color-submit-disabled);
  cursor: not-allowed;
}
</style>
