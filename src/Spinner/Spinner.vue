<template lang="pug">
div(class="spinner" role="status")
    span(class="sr-only-text")
     | Please wait...
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Spinner",
});
</script>

<style scoped>
.spinner {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border: 4px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--border-radius-round);
  animation: spin 1.5s linear infinite;
}

.sr-only-text {
  position: absolute;
  margin: -1px;
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  padding: 0;
  clip: rect(0, 0, 0, 0);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
