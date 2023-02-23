<template lang="pug">
div(
  class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
)
  span(class="bg-gray-800 p-1 text-gray-400")
    | {{ $i18n.locale }}
  span(class="bg-gray-800 p-1 text-gray-400")
    | {{ currentUserEmail }}
  span(class="bg-gray-800 p-1 text-gray-400")
    | {{ currentUserName }}
  img(
    :src="currentUserPicture"
    :alt="currentUserName"
  )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "RightContent",
  props: {
    locale: {
      type: String,
    },
    currentUserEmail: {
      type: String,
    },
    currentUserName: {
      type: String,
    },
    currentUserPicture: {
      type: String,
    },
  },
})
</script>
