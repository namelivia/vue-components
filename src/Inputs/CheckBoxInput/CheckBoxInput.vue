<template lang="pug">
div(class="checkbox-container")
  input(
    :id="id"
    :name="id"
    :required="required"
    :value="checked"
    @input="onInput"
    type="checkbox"
    unchecked-value="false"
  )
  label(class="checkbox-label" :for="id") {{ label }}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CheckBoxInput',
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
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
  },
  emits: ['update'],
  methods: {
    onInput(event) {
      this.$emit('update', event.target.value)
    },
  },
})
</script>

<style scoped>
.checkbox-container {
  margin-bottom: 1rem;
}

input[type='checkbox'] {
  margin-right: 0.5rem;
}

.checkbox-label {
  display: block;
  color: var(--color-checkbox-label);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
}
</style>
