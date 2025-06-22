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
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  color: var(--color-image-input);
}

image-input input[type="file"] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-image-input-border);
  border-radius: var(--border-radius--base);
  color: var(--color-image-input);
  background-color: var(--color-image-input-background);
  cursor: pointer;
}

image-input input[type="file"]:focus {
  outline: none;
  border-color: var(--color-image-input-border-focus);
  box-shadow: 0 0 0 3px var(--color-image-input-shadow);
}

image-input input[type="file"]:disabled {
  background-color: var(--color-input-disabled);
  cursor: not-allowed;
}
</style>
