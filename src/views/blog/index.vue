<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog">
    <h1 class="text-black">BB-Home</h1>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { getArticles } from '@/api'
onMounted(() => {
  getArticles().then((res) => {
    console.log(res.articles)
  })
})
</script>

<style scoped lang="scss"></style>
