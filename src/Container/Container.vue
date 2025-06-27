<template lang="pug">
div(class="container")
  slot
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Container"
});
</script>

<style scoped>
.container {
  max-width: var(--container-max-width);
  margin: var(--container-margin);
}
</style>
