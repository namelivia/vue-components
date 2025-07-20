<template lang="pug">
button(
    type="submit"
    class="submit-button"
    :disabled="disabled"
)
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubmitButton',
  props: {
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
})
</script>

<style scoped>
.submit-button {
  background-color: var(--color-submit);
  color: var(--color-submit-text);
  font-weight: var(--font-weight-bold);
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.submit-button:hover {
  background-color: var(--color-submit-hover);
}

.submit-button:disabled {
  background-color: var(--color-submit-disabled);
  cursor: not-allowed;
}
</style>
