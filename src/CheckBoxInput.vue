<template lang="pug">
div(class="mb-4")
  input(
    :id="id"
    :name="id"
    :required="required"
    :value="checked"
    @input="onInput"
    type="checkbox"
    unchecked-value="false"
  )
  //TODO: This seems not to work
  //label(class="block text-gray-700 text-sm font-bold" :for="id") {{ label }}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CheckBoxInput",
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
