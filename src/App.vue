<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <Navbar />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/navbarComp.vue'
// import Button from 'primevue/button'
</script>
