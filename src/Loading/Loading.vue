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
  font-size: 1.25rem;
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
  background-color: #60a5fa;
}

.loading-ball.green {
  background-color: #34d399;
}

.loading-ball.red {
  background-color: #f87171;
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
