<template>
  <div class="card flex justify-center">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.path" v-slot="{ href, navigate }" :to="item.path" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span class="text-primary font-semibold">{{ item.title }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0">{{ item.title }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { type TMenuItem, type TBreadcrumbItem } from '@/types'
import { websiteMenu } from '@/router/index'
import { useRoute } from 'vue-router'

const home = ref()

const findRouteByName = (
  menu: TMenuItem[],
  targetName: string,
  breadcrumbs: TBreadcrumbItem[] = [],
): TBreadcrumbItem[] | null => {
  for (const item of menu) {
    // If the current item's name matches the target, add to breadcrumbs and return
    if (!item.name) continue
    if (item.name === targetName) {
      breadcrumbs.push({
        title: item.title,
        name: item.name,
        path: item.path,
      })
      return breadcrumbs
    }

    // If the item has children, recursively search them
    if (item.children) {
      const result = findRouteByName(item.children, targetName, [
        ...breadcrumbs,
        {
          title: item.title,
          name: item.name,
          path: item.path,
        },
      ])

      // If the result is found, return it
      if (result) {
        return result
      }
    }
  }

  return null
}

const items = ref([
  { title: 'Components' },
  { title: 'Form' },
  { title: 'InputText', path: '/inputtext' },
])
const route = useRoute()
const currentRouteArr = ref<TBreadcrumbItem[] | null>(null)

watch(route, (val) => {
  if (val.name) {
    console.log(`route name:`, val.name)
    currentRouteArr.value = findRouteByName(websiteMenu, val.name as string)
    console.log(`currentRouteArr.value:`, currentRouteArr.value)
  }
})
</script>
