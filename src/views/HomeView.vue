<template>
  <div
    class="dynamic-bg-container flex flex-col items-center justify-center h-full"
    :style="renderBG()"
  >
    <!-- DO NOT DELETE THIS COMMENT -->
    <!-- <h1 class="text-3xl">{{ $t('content.home.title') }}</h1>
    <p class="mt-3 mb-4">{{ $t('content.home.description') }}</p> -->
    <div class="content-container flex flex-col items-center justify-center relative">
      <div class="hidden sm:flex flex-col items-center justify-center relative">
        <MainBtn
          class="main-button w-one-icon left"
          showLeft
          @click="handleMainBtnClick(ESports.Diving)"
        />
        <MainBtn
          class="main-button w-one-icon right"
          showRight
          @click="handleMainBtnClick(ESports.Hiking)"
        />
        <MainBtn
          class="center-btn main-button"
          :startSec="DELAY_SEC"
          showLeft
          showRight
          @click="handleMainBtnClick()"
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
    </li>
  </ul>
  <div class="bg-control-btn">
    <Button
      icon="pi pi-chevron-left"
      severity="primary"
      variant="text"
      aria-label="Filter"
      rounded
      @click="currentIdx--"
      class="absolute left-0 top-1/2 transform -translate-y-1/2"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MainBtn from '@/components/button/homeMain.vue'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { ESports } from '@/types'
const router = useRouter()

const DELAY_SEC = 6

const monkData = [
  {
    id: 'm-0',
    name: 'Mt. Huoyan',
    image: 'public/images/1.png',
    path: 'houyan-mountain',
  },
  {
    id: 'm-1',
    name: 'Dadongshan',
    image: 'public/images/2.png',
    path: 'dadongshan',
  },
  {
    id: 'm-2',
    name: 'Datongshan',
    image: 'public/images/3.png',
    path: 'datongshan',
  },
  {
    id: 'd-0',
    name: 'Dive-Resort-in-North-of-Lanyu',
    image: 'public/images/4.png',
    path: 'dive-resort-in-north-of-lanyu',
  },
  {
    id: 'd-1',
    name: 'Cebu-Bohol-1',
    image: 'public/images/5.png',
    path: 'cebu-bohol-1',
  },
  {
    id: 'd-2',
    name: 'Cebu-Bohol-2',
    image: 'public/images/6.png',
    path: 'cebu-bohol-2',
  },
]

const defaultCover = {
  id: 'default-cover',
  name: 'default-cover',
  image: 'public/images/6.png',
  path: '',
}

const articles = ref([defaultCover])
const currentIdx = ref(0)

const getArticles = () => {
  articles.value = [defaultCover, ...monkData]
}

const openLink = (link: string) => {
  window.open(link, '_blank')
}

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

const renderBG = () => {
  return {
    backgroundImage: `url(${articles.value[currentIdx.value % articles.value.length].image})`,
  }
}

const handleMainBtnClick = (params?: string) => {
  if (params) {
    router.push({
      name: 'blog',
      query: {
        sport: params,
      },
    })
  } else {
    console.log(`To Path: /blog/${articles.value[currentIdx.value].path}`)
    router.push(`/blog/${articles.value[currentIdx.value].path}`)
  }
}

onMounted(() => {
  getArticles()
  setInterval(() => {
    currentIdx.value++
  }, 5000)
})
</script>
<style lang="scss" scoped>
.main-button {
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
  &.center-btn {
    width: 5.625rem;
    overflow: hidden;
    animation: 1.5s linear 4.5s forwards wider;
    // For more animation
    // animation:
    //   1.5s linear 4.5s forwards wider,
    //   2.5s customFadeOut 8s forwards;
    // @media screen and (max-width: 640px) {
    //   animation: 1.5s linear 4.5s forwards wider;
    // }
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
.dynamic-bg-container {
  width: 100vw;
  height: 100vh;
  background-size: cover; /* Ensure image covers the full viewport */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */
  opacity: 0; /* Initially transparent */
  transition: opacity 1s ease-in-out; /* Smooth transition */
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
    transform: translate(-150%, 100%);
  }
}

@keyframes moveRight {
  from {
    transform: translate(50%, 100%);
  }

  to {
    transform: translate(150%, 100%);
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
