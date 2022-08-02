<template lang="pug">
span(class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800")
  | {{text}}
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Badge",
  props: {
    text: String,
  },
})
</script>
