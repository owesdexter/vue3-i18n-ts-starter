<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="blog">
    <h1 class="text-black">{{ content.title }}</h1>
  </div>
</template>
<script lang="ts" setup>
const content = {
  title: 'Blog',
  description: 'This is the blog page',
}
</script>
<style scoped lang="scss"></style>
