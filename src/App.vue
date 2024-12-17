<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div :class="{ absolute: routeName === 'home', ' z-10': true, ' w-full': true }">
      <Navbar />
    </div>
  </header>
  <main :class="`relative page-${routeName}`">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/navbarComp.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routeName = computed(() => route.name)
</script>
