<template lang="pug">
button(v-on:click="onClick" class="secondary-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SecondaryButton',
  props: {
    text: String,
  },
  emits: ['click'],
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    },
  },
})
</script>

<style scoped>
.secondary-button {
  background-color: var(--color-secondary);
  color: var(--color-secondary-text);
  font-weight: var(--font-weight-bold);
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.secondary-button:hover {
  background-color: var(--color-secondary-hover);
}
</style>
