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
  <ul class="social-media-box flex flex-col justify-center absolute bottom">
    <li class="social-media" v-for="item in socialMedias" :key="item.name">
      <Button
        :icon="`pi pi-${item.name}`"
        severity="primary"
        variant="text"
        aria-label="Filter"
        rounded
        raised
        @click="openLink(item.link)"
        class="mb-4"
      />
      <!-- <Button icon="pi pi-check" variant="text" raised rounded aria-label="Filter" /> -->
      <!-- <a href="https://www.facebook.com/" target="_blank">
        <span class="pi pi-facebook"></span>
      </a> -->
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MainBtn from '@/components/button/homeMain.vue'
import Button from 'primevue/button'
const DELAY_SEC = 6

const openLink = (link: string) => {
  window.open(link, '_blank')
}
const isEndAnimation = ref(false)
const END_SEC = 10
const socialMedias = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/universeoutdoord/',
    icon: 'pi pi-instagram',
  },
  {
    name: 'youtube',
    link: 'https://youtube.com/@universeoutdoord?si=6fdH-o0hE7EeWY1e',
    icon: 'pi pi-youtube',
  },
]
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

.social-media-box {
  transform: translate(100%, -120%);
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
