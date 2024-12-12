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
import ImageBlobReduce from 'image-blob-reduce';
import { defineComponent } from 'vue';
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
    },
  },
  data() {
    return {
      rawImage: null,
      resizing: false,
    };
  },
  emits: ['loaded', 'error'],
  methods: {
    async onInput(file) {
      try {
        this.resizing = true;
        const reduce = new ImageBlobReduce();
        const blob = await reduce.toBlob(file, { max: 1024 });
        const newFile = new File([blob], file.name, { type: file.type });
        this.$emit('loaded', newFile);
      } catch (err) {
        this.$emit('error');
      } finally {
        this.resizing = false;
      }
    },
  },
});
</script>

<style scoped>
image-input {
  display: block;
  margin-bottom: 1rem;
}

image-input label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.875rem;
  color: #4a5568;
}

image-input input[type="file"] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  color: #4a5568;
  background-color: #ffffff;
  cursor: pointer;
}

image-input input[type="file"]:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

image-input input[type="file"]:disabled {
  background-color: #e5e7eb;
  cursor: not-allowed;
}
</style>
