<template lang="pug">
table(class="w-full border-collapse")
  slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "StyledTable"
})
</script>
