<template lang="pug">
button(type="reset" class="reset-button")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ResetButton",
  props: {
    text: String,
  },
});
</script>

<style scoped>
.reset-button {
  background-color: #ef4444;
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.reset-button:hover {
  background-color: #b91c1c;
}
</style>
