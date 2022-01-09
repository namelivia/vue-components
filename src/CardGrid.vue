<template lang="pug">
div(class="flex flex-wrap lg:justify-between justify-center align-content:center")
  slot
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "CardGrid"
})
</script>
