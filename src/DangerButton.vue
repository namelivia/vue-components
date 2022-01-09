<template lang="pug">
button(v-on:click="onClick" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded")
  | {{text}}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "DangerButton",
  props: {
    text: String,
  },
  emits: ['click'],
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    }
  }
})
</script>
