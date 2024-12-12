<template lang="pug">
div(class="m-8")
  div(class="max-w-sm rounded overflow-hidden shadow-lg")
    slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Card"
})
</script>
