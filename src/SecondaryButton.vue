<template lang="pug">
button(v-on:click="onClick" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "SecondaryButton",
  props: {
    text: String,
  },
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    }
  }
})
</script>
