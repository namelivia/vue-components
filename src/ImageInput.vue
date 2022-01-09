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
    :value="file"
    :drop-placeholder="dropPlaceholder"
    @input="onInput"
    type="file"
    accept="image/*"
  )
</template>
<script>
import { defineComponent } from 'vue'
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
    }
  },
  emits: ['update'],
  methods: {
    onInput(event) {
      this.$emit('update', event.target.files[0])
    },
  },
})
</script>
