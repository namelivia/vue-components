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
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.regular-button:hover {
  background-color: var(--color-regular-hover);
}
</style>

