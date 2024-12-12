<template lang="pug">
div(class="mb-4")
  label(class="block text-gray-700 text-sm font-bold mb-2" :for="id")
    | {{ label }}
  input(
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-gray-200 disabled:cursor-not-allowed"
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
import { defineComponent } from 'vue'
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
      this.$emit('update', event.target.value)
    },
  },

})
</script>
