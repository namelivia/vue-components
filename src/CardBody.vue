<template>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ title }}</div>
    <p class="text-gray-700 text-base">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="js">
export default {
  props: {
    title: String,
  },
}
</script>
