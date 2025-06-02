<template lang="pug">
div(v-if="!dismissed" class="card-container")
  div(class="card")
      card-image(:src="image" :alt="title" @width="$emit('width', $event)")
      card-body(:title="title")
        slot
</template>
<script lang="js">
import { default as CardImage } from './CardImage.vue'
import { default as CardBody } from './CardBody.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Card",
  props: {
    image: String,
    title: String,
    dismissed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CardImage,
    CardBody,
  },
  emits: ['width']
})
</script>
<style scoped>
.card-container {
  margin: 2rem;
}

.card {
  max-width: 24rem;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--color-card-shadow);
}
</style>
