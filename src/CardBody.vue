<template lang="pug">
.px-6.py-4
  div.font-bold.text-xl.mb-2
    | {{ title }}
  p.text-gray-700.text-base
    slot
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CardBody",
  props: {
    title: String,
  },
})
</script>
