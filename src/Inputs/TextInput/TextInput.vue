<template lang="pug">
div(class="text-input-container")
  label(class="text-input-label" :for="id")
    | {{ label }}
  input(
    class="text-input-field"
    :id="id"
    :name="id"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :value="text"
    @input="onInput"
    type="text"
  )
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "TextInput",
  props: {
    id: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  emits: ['update'],
  methods: {
    onInput(event) {
      this.$emit('update', event.target.value);
    },
  },
});
</script>

<style scoped>
.text-input-container {
  margin-bottom: 1rem;
}

.text-input-label {
  display: block;
  color: var(--color-text-input-label);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
}

.text-input-field {
  box-shadow: 0 1px 3px var(--color-text-input-shadow);
  appearance: none;
  border: 1px solid var(--color-text-input-border);
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: var(--color-text-input);
  line-height: 1.25;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.text-input-field:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-text-input-shadow);
  border-color: var(--color-text-input-border-focus);
}

.text-input-field:disabled {
  background-color: var(--color-input-disabled);
  cursor: not-allowed;
}
</style>

