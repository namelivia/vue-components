<template>
  <button v-on:click="onClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {{text}} </button>
</template>

<script lang="js">
export default {
  props: {
    text: String,
  },
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
