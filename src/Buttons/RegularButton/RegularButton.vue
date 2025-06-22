<template lang="pug">
button(v-on:click="onClick" class="regular-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "RegularButton",
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
.regular-button {
  background-color: var(--color-regular);
  color: var(--color-regular-text);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-base);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.regular-button:hover {
  background-color: var(--color-regular-hover);
}
</style>

