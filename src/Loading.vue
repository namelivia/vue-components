<template>
<div>
  <h1 class="text-center.text-1xl.leading-relaxed"> Loading... </h1>
  <div class="flex items-center justify-center space-x-2 animate-bounce">
    <div class="w-8 h-8 bg-blue-400 rounded-full" />
    <div class="w-8 h-8 bg-green-400 rounded-full" />
    <div class="w-8 h-8 bg-red-400 rounded-full" />
  </div>
</div>
</template>

<script lang="js">
export default {
  props: {
    text: String,
  },
}
</script>
