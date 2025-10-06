<template>
  <section class="bg-black text-white px-6 md:px-20 md:py-10 mb-10 ">
    <div class=" mx-auto">
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
