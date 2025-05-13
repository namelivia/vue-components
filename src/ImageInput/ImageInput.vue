<template lang="pug">
div(class="image-input-container")
  label(class="image-input-label" :for="id")
    | {{ label }}
  input(
    class="image-input-field"
    :id="id"
    :name="id"
    :required="required"
    :placeholder="placeholder"
    :value="file"
    :drop-placeholder="dropPlaceholder"
    @input="onInput"
    type="file"
    accept="image/*"
  )
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ImageInput",
  props: {
    id: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    dropPlaceholder: {
      type: String,
    },
    label: {
      type: String,
    },
    file: {
      type: Object,
    },
  },
  emits: ['update'],
  methods: {
    onInput(event) {
      this.$emit('update', event.target.files[0]);
    },
  },
});
</script>

<style scoped>
.image-input-container {
  margin-bottom: 1rem;
}

.image-input-label {
  display: block;
  color: var(--color-image-input-label);
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.image-input-field {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  appearance: none;
  border: 1px solid var(--color-image-input-border);
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #4a5568;
  line-height: 1.25;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.image-input-field:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  border-color: var(--color-image-input-border-focused);
}
</style>
