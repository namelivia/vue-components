<template lang="pug">
button(v-on:click="onClick" class="secondary-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "SecondaryButton",
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
.secondary-button {
  background-color: var(--color-secondary);
  color: var(--color-secondary-text);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-base);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.secondary-button:hover {
  background-color: var(--color-secondary-hover);
}
</style>
