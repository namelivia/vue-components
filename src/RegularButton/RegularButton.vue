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
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.regular-button:hover {
  background-color: #2563eb;
}
</style>

