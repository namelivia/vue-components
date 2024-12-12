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
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #2563eb;
}

.submit-button:disabled {
  background-color: #60a5fa;
  cursor: not-allowed;
}
</style>
