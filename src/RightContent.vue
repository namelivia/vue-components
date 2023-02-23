<template lang="pug">
div(
  class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
)
  img(
    class="rounded-full p-1"
    style="height: 50px;"
    :src="currentUserPicture"
    :alt="avatarAlt"
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
  computed: {
    avatarAlt: function () {
      return this.currentUserName + ` (${this.currentUserEmail})`
    },
  },
})
</script>
