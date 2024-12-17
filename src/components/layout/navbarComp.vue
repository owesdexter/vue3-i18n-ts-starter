<template>
  <Menubar
    :model="websiteMenu"
    breakpoint="640px"
    class="bg-transparent border-0 flex justify-between sm:justify-center"
    :pt="{
      itemContent: {
        class: 'bg-transparent hover:bg-transparent',
      },
    }"
  >
    <template #item="{ item, props }">
      <router-link
        v-if="item.path && item.name !== currentRouteName"
        v-slot="{ href, navigate }"
        :to="item.path"
        custom
        class="hover:bg-transparent"
      >
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          @click="navigate"
          class="font-semibold hover:bold hover:underline hover:underline-offset-4 hover:bg-transparent"
        >
          <span>{{ $t(item.title) }}</span>
        </a>
        <!-- {{ $t(item.title) }} -->
      </router-link>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Menubar from 'primevue/menubar'
import { websiteMenu } from '@/router/index'
import { useRoute } from 'vue-router'
const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
