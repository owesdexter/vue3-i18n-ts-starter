<template>
  <div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-3xl">{{ $t('content.home.title') }}</h1>
    <p class="mt-3 mb-4">{{ $t('content.home.description') }}</p>
    <div class="content-container flex flex-col items-center justify-center relative">
      <div class="hidden sm:flex flex-col items-center justify-center relative">
        <MainBtn class="main-button w-one-icon left" showLeft />
        <MainBtn class="main-button w-one-icon right" showRight />
        <MainBtn
          v-if="!isEndAnimation"
          class="center-btn main-button"
          :startSec="DELAY_SEC"
          showLeft
          showRight
        />
      </div>
      <div class="flex sm:hidden flex-col items-center justify-center relative">
        <MainBtn class="center-btn main-button" :startSec="DELAY_SEC" showLeft showRight />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MainBtn from '@/components/button/homeMain.vue'
const DELAY_SEC = 6
const isEndAnimation = ref(false)
const END_SEC = 10
setTimeout(() => {
  isEndAnimation.value = true
}, END_SEC * 1000)
</script>
<style lang="scss" scoped>
.main-button {
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
  &.center-btn {
    width: 5.625rem;
    overflow: hidden;

    animation:
      1.5s linear 4.5s forwards wider,
      2.5s customFadeOut 8s forwards;
    @media screen and (max-width: 640px) {
      animation: 1.5s linear 4.5s forwards wider;
    }
  }
  &.w-one-icon {
    width: 7rem;
    &.left {
      opacity: 0;
      transform: translate(20%, 100%);
      animation:
        3s moveLeft 7s forwards,
        3s customFadeIn 7.5s forwards;
    }
    &.right {
      opacity: 0;
      transform: translate(-20%, 100%);
      animation:
        3s moveRight 7s forwards,
        3s customFadeIn 7.5s forwards;
    }
  }
}

@keyframes wider {
  from {
    width: 5.625rem;
  }

  to {
    width: 9.5rem;
  }
}

@keyframes moveLeft {
  from {
    transform: translate(-50%, 100%);
  }

  to {
    transform: translate(-130%, 100%);
  }
}

@keyframes moveRight {
  from {
    transform: translate(50%, 100%);
  }

  to {
    transform: translate(130%, 100%);
  }
}

@keyframes customFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes customFadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
