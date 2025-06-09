<template>
  <section class="bg-black text-white py-10 px-4">
    <div class="max-w-6xl mx-auto">
      <HomeBlogTabs :categories="categories" v-model:activeTab="activeTab" />
      <HomeBlogList :blogs="filteredBlogs" />
    </div>
  </section>
</template>

<script setup>

const { data: blogs } = await useFetch('/api/post')

const categories = ['All', 'Quantum Computing', 'AI Ethics', 'Space Exploration']
const activeTab = ref('All')

const filteredBlogs = computed(() => {
  if (activeTab.value === 'All') return blogs.value
  return blogs.value?.filter(blog => blog.category === activeTab.value)
})
</script>
