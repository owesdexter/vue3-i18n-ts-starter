<template>
  <div class="blog">
    <h1>{{ content.title }}</h1>
  </div>
</template>
<script lang="ts" setup>
const content = {
  title: 'Blog',
  description: 'This is the blog page',
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
