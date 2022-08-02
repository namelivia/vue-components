<template lang="pug">
div(class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0" v-if="open")
  div(class="bg-white px-16 py-14 rounded-md text-center")
    h1(class="text-xl mb-4 font-bold text-slate-500")
      | Are you sure?
    secondary-button(@click="onCancel" text="No")
    danger-button.ml-2(@click="onConfirm" text="Yes")
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Modal",
  emits: ['cancel', 'confirm'],
  props: {
    open: Boolean,
  },
  methods: {
    onCancel(evt) {
      this.$emit('cancel', evt)
    },
    onConfirm(evt) {
      this.$emit('confirm', evt)
    },
  }
})
</script>
