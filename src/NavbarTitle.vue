<template lang="pug">
a(:href="href" class="flex-shrink-0 flex items-center")
  img(
    class="block lg:hidden h-8 w-auto"
    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    alt="Workflow"
  )
  img(
    class="hidden lg:block h-8 w-auto"
    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
    alt="Workflow"
  )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "NavbarTitle",
  props: {
    href: {
      type: String,
    },
  }
})
</script>
