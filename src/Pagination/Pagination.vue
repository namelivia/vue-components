<template lang="pug">
div(class="pagination-container")
  a(:href="previousLink" v-if="showPrevious")
    regular-button(:text="previousLabel")
  a(:href="nextLink")
    regular-button(:text="nextLabel")
</template>

<script lang="js">
import { default as RegularButton } from '../Buttons/RegularButton/RegularButton.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Pagination",
  props: {
    previousLabel: String,
    nextLabel: String,
    showPrevious: Boolean,
    previousLink: String,
    nextLink: String,
  },
  components: {
    RegularButton,
  },
});
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

a {
  text-decoration: none;
}
</style>
