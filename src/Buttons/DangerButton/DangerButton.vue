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
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.danger-button:hover {
  background-color: var(--color-danger-hover);
}
</style>
