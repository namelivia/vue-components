<template lang="pug">
div(class="modal-overlay" v-if="open")
  div(class="modal-container")
    h1(class="modal-title")
      | Are you sure?
    secondary-button(@click="onCancel" text="No")
    danger-button.ml-2(@click="onConfirm" text="Yes")
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Modal',
  emits: ['cancel', 'confirm'],
  props: {
    open: Boolean,
  },
  methods: {
    onCancel(evt) {
      this.$emit('cancel', evt)
    },
    onConfirm(evt) {
      this.$emit('confirm', evt)
    },
  },
})
</script>

<style scoped>
.modal-overlay {
  background-color: var(--color-modal-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal-container {
  background-color: var(--color-modal-background);
  padding: 3.5rem 4rem;
  border-radius: var(--border-radius-big);
  text-align: center;
}

.modal-title {
  font-size: var(--font-size-large);
  margin-bottom: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-modal-title);
}
</style>
