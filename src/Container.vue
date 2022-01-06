<template lang="pug">
.container.mx-auto
  slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Container"
})
</script>
