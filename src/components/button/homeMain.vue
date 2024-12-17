<template>
  <Button
    :class="`main-button bg-yellow-300 hover:bg-yellow-500 ${showLeft && showRight ? 'custom-wider' : ''}`"
  >
    <span :class="`icon icon-left pi pi-palette`" v-if="showLeft"></span>
    <span :class="`whitespace-nowrap justify-between ${showLeft && showRight ? ' mx-2' : ''}`">{{
      $t(btnText)
    }}</span>
    <span :class="`icon icon-right pi pi-palette`" v-if="showRight"></span>
  </Button>
</template>
<script setup lang="ts">
import Button from 'primevue/button'
const props = defineProps({
  btnText: {
    type: String,
    default: 'content.home.mainButtonText',
    required: true,
  },
  showLeft: {
    type: Boolean,
    default: false,
  },
  showRight: {
    type: Boolean,
    default: false,
  },
  startSec: {
    type: Number,
    default: 3,
  },
})

// const showIcon = ref(false)
// if (props.showLeft && props.showRight) {
//   setTimeout(() => {
//     showIcon.value = true
//   }, props.startSec * 1000)
// } else {
//   showIcon.value = true
// }
</script>
