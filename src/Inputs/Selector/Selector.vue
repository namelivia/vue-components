<template lang="pug">
div(class="selector-container")
  label(class="selector-label" :for="id")
    | {{ label }}
  div(class="selector-relative-container")
    select(
      :id="id"
      :disabled="disabled"
      v-model="selected"
      class="selector-field"
      @change="onChange"
    )
      option(
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      )
        | {{ option.text }}
    div(class="selector-icon-container")
      svg(
        class="selector-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      )
        path(
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        )
</template>

<script lang="js">
import { defineComponent } from 'vue';
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
    };
  },
  watch: {
    initialValue: {
      immediate: true,
      handler: function (newSelectedValue) {
        if (newSelectedValue !== "" && newSelectedValue !== undefined) {
          this.selected = newSelectedValue;
        }
      },
    },
    options: {
      immediate: true,
      handler: function (newOptions) {
        const enabledOptions = newOptions.filter((option) => !option.disabled);
        if (enabledOptions.length === 1) {
          this.selected = enabledOptions[0].value;
          this.$emit('selected', this.selected);
        }
      },
    },
  },
  emits: ['selected'],
  methods: {
    onChange() {
      this.$emit('selected', this.selected);
    },
  },
});
</script>

<style scoped>
.selector-container {
  margin-bottom: 1rem;
}

.selector-label {
  display: block;
  color: var(--color-selector-label);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
}

.selector-relative-container {
  position: relative;
}

.selector-field {
  appearance: none;
  width: 100%;
  background-color: var(--color-selector-background);
  border: 1px solid var(--color-selector-border);
  color: var(--color-selector-text);
  padding: 0.75rem 1rem 0.75rem 0.75rem;
  padding-right: 2rem;
  border-radius: var(--border-radius--base);
  line-height: 1.25;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.selector-field:focus {
  outline: none;
  background-color: var(--color-selector-background-focused);
  border-color: var(--color-selector-border-focused);
}

.selector-icon-container {
  pointer-events: none;
  position: absolute;
  inset: 0 auto;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  color: var(--color-selector-icon-container);
}

.selector-icon {
  fill: currentColor;
  height: 1rem;
  width: 1rem;
}
</style>
