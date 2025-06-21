<template lang="pug">
button(v-on:click="onClick" class="danger-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "DangerButton",
  props: {
    text: String,
  },
  emits: ['click'],
  methods: {
    onClick(evt) {
      this.$emit('click', evt);
    },
  },
});
</script>

<style scoped>
.danger-button {
  background-color: var(--color-danger);
  color: var(--color-danger-text);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.danger-button:hover {
  background-color: var(--color-danger-hover);
}
</style>
