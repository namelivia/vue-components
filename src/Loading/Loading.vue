<template lang="pug">
div
  h1(class="text-center.text-1xl.leading-relaxed") Loading...
  div(class="flex items-center justify-center space-x-2 animate-bounce")
    div(class="w-8 h-8 bg-blue-400 rounded-full")
    div(class="w-8 h-8 bg-green-400 rounded-full")
    div(class="w-8 h-8 bg-red-400 rounded-full")
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Loading",
  props: {
    text: String,
  },
})
</script>
