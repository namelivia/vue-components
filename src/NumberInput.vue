<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="id"
      :name="id"
      :required="required"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      type="number"
      min="1"
    />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('update', event.target.value)
    },
  },

}
</script>
