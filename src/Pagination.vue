<template lang="pug">
div(class="flex justify-between mt-4")
  a(:href="previousLink" v-if='showPrevious')
    regular-button(:text="previousLabel")
  a(:href="nextLink")
    regular-button(:text="nextLabel")
</template>

<script lang="js">
import { default as RegularButton } from './RegularButton.vue'
import { defineComponent } from 'vue'
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
    RegularButton: RegularButton
  }
})
</script>
