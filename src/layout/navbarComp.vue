<template>
  <div class="card">
    <Menubar :model="items" breakpoint="768px" class="bg-slate-500" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
  },
])
</script>
