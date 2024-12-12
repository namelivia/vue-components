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
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.number-input-field {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  appearance: none;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #4a5568;
  line-height: 1.25;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.number-input-field:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  border-color: #3182ce;
}

.number-input-field:disabled {
  background-color: #e5e7eb;
  cursor: not-allowed;
}
</style>

