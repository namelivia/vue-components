<template>
  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {{text}} </button>
</template>

<script lang="js">
export default {
  props: {
    text: String,
  },
}
</script>
