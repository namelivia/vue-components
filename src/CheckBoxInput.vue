<template>
  <div class="mb-4">
    <input
      :id="id"
      :name="id"
      :required="required"
      :value="checked"
      @input="onInput"
      type="checkbox"
      unchecked-value="false"
    />
      <label class="block text-gray-700 text-sm font-bold" :for="id">
        {{ label }}
      </label>
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
    checked: {
      type: Boolean,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('update', event.target.value)
    },
  },

}
</script>
