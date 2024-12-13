<template>
  <main class="h-screen">
    <div class="flex flex-col items-center justify-center h-full">
      <!-- <h1 class="text-3xl">{{ $t('content.home.title') }}</h1>
      <p class="mt-3 mb-4">{{ $t('content.home.description') }}</p> -->
      <div class="content-container flex flex-col items-center justify-center relative">
        <MainBtn class="main-button w-one-icon left" showLeft />
        <MainBtn class="main-button w-one-icon right" showRight />
        <MainBtn class="main-button my-wider-animation" :startSec="DELAY_SEC" showLeft showRight />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import MainBtn from '@/components/button/homeMain.vue'
const DELAY_SEC = 6
</script>
<style lang="scss" scoped>
.main-button {
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
  &.w-one-icon {
    width: 7rem;
    &.left {
      opacity: 0;
      transform: translate(20%, 100%);
      animation:
        3s moveLeft 10s forwards,
        3s customFadeIn 10.5s forwards;
    }
    &.right {
      opacity: 0;
      transform: translate(-20%, 100%);
      animation:
        3s moveRight 10s forwards,
        3s customFadeIn 10.5s forwards;
    }
  }
}

.my-wider-animation {
  width: 5.625rem;
  animation: 1.5s linear 4.5s forwards wider;
}

.custom-fadein {
  opacity: 0;
  animation: 2.5s customFadeIn 6s forwards;
}

@keyframes wider {
  from {
    width: 5.625rem;
  }

  to {
    width: 8.5rem;
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
</style>
