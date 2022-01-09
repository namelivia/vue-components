<template lang="pug">
div(class="mb-4")
  label(class="block text-gray-700 text-sm font-bold mb-2" :for="id")
    | {{ label }}
  input(
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :id="id"
    :name="id"
    :required="required"
    :placeholder="placeholder"
    :value="text"
    @input="onInput"
    type="text"
  )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "TextInput",
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
    text: {
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
