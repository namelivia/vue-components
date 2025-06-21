<template lang="pug">
div
  h1(class="loading-text") Loading...
  div(class="loading-balls-container")
    div(class="loading-ball blue")
    div(class="loading-ball green")
    div(class="loading-ball red")
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Loading",
  props: {
    text: String,
  },
});
</script>

<style scoped>
.loading-text {
  text-align: center;
  font-size: var(--font-size-large);
  line-height: 1.75rem;
}

.loading-balls-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: bounce 1.5s infinite ease-in-out;
}

.loading-ball {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.loading-ball.blue {
  background-color: var(--color-loading-ball-blue);
}

.loading-ball.green {
  background-color: var(--color-loading-ball-green);
}

.loading-ball.red {
  background-color: var(--color-loading-ball-red);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
}
</style>
