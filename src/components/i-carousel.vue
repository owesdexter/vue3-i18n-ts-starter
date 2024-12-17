<template>
  <div class="card">
    <Carousel :value="articles" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'

onMounted(() => {
  console.log('mounted, get Articles')
})

const articles = ref([
  {
    id: 'm-0',
    name: 'Mt. Huoyan',
    image: 'public/images/1.png',
    link: '/blog/houyan-mountain',
  },
  {
    id: 'm-1',
    name: 'Dadongshan',
    image: 'public/images/2.png',
    link: '/blog/dadongshan',
  },
  {
    id: 'm-2',
    name: 'Datongshan',
    image: 'public/images/3.png',
    link: '/blog/datongshan',
  },
  {
    id: 'd-0',
    name: 'Dive-Resort-in-North-of-Lanyu',
    image: 'public/images/4.png',
    link: '/blog/dive-resort-in-north-of-lanyu',
  },
  {
    id: 'd-1',
    name: 'Cebu-Bohol-1',
    image: 'public/images/5.png',
    link: '/blog/cebu-bohol-1',
  },
  {
    id: 'd-2',
    name: 'Cebu-Bohol-2',
    image: 'public/images/6.png',
    link: '/blog/cebu-bohol-2',
  },
])
// const responsiveOptions = ref([
//   {
//     breakpoint: '1400px',
//     numVisible: 2,
//     numScroll: 1,
//   },
//   {
//     breakpoint: '1199px',
//     numVisible: 3,
//     numScroll: 1,
//   },
//   {
//     breakpoint: '767px',
//     numVisible: 2,
//     numScroll: 1,
//   },
//   {
//     breakpoint: '575px',
//     numVisible: 1,
//     numScroll: 1,
//   },
// ])

// const getSeverity = (status) => {
//   switch (status) {
//     case 'INSTOCK':
//       return 'success'

//     case 'LOWSTOCK':
//       return 'warn'

//     case 'OUTOFSTOCK':
//       return 'danger'

//     default:
//       return null
//   }
// }
</script>
