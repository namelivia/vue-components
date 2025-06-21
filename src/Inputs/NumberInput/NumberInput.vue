<template lang="pug">
div(class="number-input-container")
  label(class="number-input-label" :for="id")
    | {{ label }}
  input(
    class="number-input-field"
    :id="id"
    :name="id"
    :required="required"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="amount"
    :min="min"
    :step="step"
    @input="onInput"
    type="number"
  )
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "NumberInput",
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
    amount: {
      type: Number,
    },
    min: {
      type: String,
    },
    step: {
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
.number-input-container {
  margin-bottom: 1rem;
}

.number-input-label {
  display: block;
  color: var(--color-number-input-label);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
}

.number-input-field {
  box-shadow: 0 1px 3px var(--color-input-shadow);
  appearance: none;
  border: 1px solid var(--color-number-input-border);
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: var(--color-number-input);
  line-height: 1.25;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.number-input-field:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-input-shadow-focus);
  border-color: var(--color-number-input-border-focus);
}

.number-input-field:disabled {
  background-color: var(--color-input-disabled);
  cursor: not-allowed;
}
</style>

