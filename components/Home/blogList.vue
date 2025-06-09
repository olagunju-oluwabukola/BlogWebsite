<template>
  <div class="space-y-6">
    <HomeBlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :blog="blog"
    />
  </div>
</template>

<script setup>

defineProps(['blogs'])
</script>
