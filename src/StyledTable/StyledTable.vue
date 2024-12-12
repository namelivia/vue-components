<template lang="pug">
table(class="styled-table")
  slot
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "StyledTable",
});
</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
}
</style>
