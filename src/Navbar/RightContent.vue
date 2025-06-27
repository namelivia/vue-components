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
<style scoped>
.action-container {
  position: absolute;       /* absolute */
  top: 0;                   /* inset-y-0 */
  bottom: 0;
  right: 0;                 /* right-0 */
  display: flex;            /* flex */
  align-items: center;      /* items-center */
  padding-right: 0.5rem;    /* pr-2 = 8px */
}

.circle-image {
  border-radius: 9999px;    /* rounded-full */
  padding: 0.25rem;        /* p-1 = 4px */
  height: 50px;            /* h-12 = 48px */
}

/* Responsive overrides at sm breakpoint (min-width: 640px) */
@media (min-width: 640px) {
  .action-container {
    position: static;       /* sm:static */
    top: auto;              /* sm:inset-auto resets top/bottom/right */
    bottom: auto;
    right: auto;
    margin-left: 1.5rem;    /* sm:ml-6 = 24px */
    padding-right: 0;       /* sm:pr-0 */
  }
}

</style>
