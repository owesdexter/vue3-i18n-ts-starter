<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <Navbar />
      <!-- <Button label="Verify" @click="console.log('Verify')" /> -->
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">{{ $t('email') }}</RouterLink>
        
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/navbarComp.vue'
// import Button from 'primevue/button'
</script>
