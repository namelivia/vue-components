<template lang="pug">
button(type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "SubmitButton",
  props: {
    text: String,
  },
})
</script>
