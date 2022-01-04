<template>
  <div class="flex justify-between mt-4">
    <a :href="previousLink" v-if='showPrevious'>
      <regular-button :text="previousLabel" />
    </a>
    <a :href="nextLink">
      <regular-button :text="nextLabel" />
    </a>
  </div>
</template>

<script lang="js">
import { default as RegularButton } from './RegularButton.vue'
export default {
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
}
</script>
