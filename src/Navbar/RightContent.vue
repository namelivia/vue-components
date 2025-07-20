<template lang="pug">
div(
  class="action-container"
)
  img(
    class="circle-image"
    :src="currentUserPicture"
    :alt="avatarAlt"
  )
</template>
<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RightContent',
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
<style scoped>
.action-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  color: var(--color-navbar-text);
  font-size: var(--font-size-navbar);
}

.circle-image {
  border-radius: 9999px;
  padding: 0.25rem;
  height: 50px;
  width: 50px;
}

@media (min-width: 640px) {
  .action-container {
    position: static;
    top: auto;
    bottom: auto;
    right: auto;
    margin-left: 1.5rem;
    padding-right: 0;
  }
}
</style>
