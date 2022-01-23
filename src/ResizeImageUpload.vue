<template lang="pug">
image-input(
    :id="id"
    :name="id"
    :required="required"
    :placeholder="placeholder"
    :drop-placeholder="dropPlaceholder"
    :label="label"
    @update="onInput"
  )
</template>
<script>
import ImageBlobReduce from 'image-blob-reduce'
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ResizeImageUpload",
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
  data() {
    return {
      rawImage: null,
      resizing: false,
    }
  },
  emits: ['loaded', 'error'],
  methods: {
    async onInput(file) {
      try {
        this.resizing = true
        const reduce = new ImageBlobReduce()
        const blob = await reduce.toBlob(file, { max: 1024 })
        const newFile = new File([blob], file.name, { type: file.type })
        this.$emit('loaded', newFile)
      } catch (err) {
        this.$emit('error')
      } finally {
        this.resizing = false
      }
    },
  },
})
</script>
