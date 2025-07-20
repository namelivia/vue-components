<template lang="pug">
button(v-on:click="onClick" :class="cssClass" :disabled="loading")
  | {{ loading ? textWhileLoading : text }}
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RegularButton',
  props: {
    text: String,
    loading: {
      type: Boolean,
      default: false,
    },
    textWhileLoading: {
      type: String,
      default: '...',
    },
  },
  emits: ['click'],
  computed: {
    cssClass: function () {
      if (this.loading) {
        return 'regular-button loading'
      }
      return 'regular-button'
    },
  },
  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    },
  },
})
</script>

<style scoped>
.regular-button {
  background-color: var(--color-regular);
  color: var(--color-regular-text);
  font-weight: var(--font-weight-bold);
  padding: var(--button-padding);
  border-radius: var(--border-radius-base);
  border: var(--button-border);
  cursor: pointer;
  transition: var(--button-transition);
}

.regular-button:hover {
  background-color: var(--color-regular-hover);
}

/* Loading state */
.loading {
  background-color: var(--color-regular-disabled);
  cursor: wait;
}
.loading:hover {
  background-color: var(--color-regular-disabled);
}
</style>
