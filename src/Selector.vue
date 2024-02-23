<template lang="pug">
div(class="mb-4")
  label(class="block text-gray-700 text-sm font-bold mb-2" :for="id")
    | {{ label }}
  div(class="relative")
    select(
      :id="id"
      :disabled="disabled"
      v-model="selected"
      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      @change="onChange"
    )
      option(
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      )
        | {{ option.text }}
    div(
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    )
      svg(
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      )
        path(
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Selector",
  props: {
    id: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    initialValue: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  watch: {
    initialValue: {
      immediate: true,
      handler: function (newSelectedValue) {
        if (newSelectedValue !== "" && newSelectedValue !== undefined) {
          this.selected = newSelectedValue
        }
      },
    },
    options: {
      immediate: true,
      handler: function (newOptions) {
        if (newOptions.length === 1) {
          this.selected = newOptions[0].value;
        }
      },
    },
  },
  emits: ['selected'],
  methods: {
    onChange() {
      this.$emit('selected', this.selected)
    },
  },
})
</script>
