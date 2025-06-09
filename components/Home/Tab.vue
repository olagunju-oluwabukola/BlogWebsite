<template>
  <section class="max-w-4xl mx-auto px-4 py-10 text-white">
    <p class="text-sm text-gray-400 uppercase mb-2">A Knowledge Treasure Trove</p>
    <h1 class="text-3xl font-bold mb-6">Explore FutureTech's In-Depth Blog Posts</h1>

    <CategoryTabs
      :categories="['All', 'Quantum Computing', 'AI Ethics', 'Space Exploration']"
      :active="selected"
      @select="setCategory"
    />

    <div class="mt-6">
      <BlogPost
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogPost from '@/components/BlogPost.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'

const selected = ref('All')
const posts = ref([])

const setCategory = (category) => {
  selected.value = category
}

const filteredPosts = computed(() => {
  return selected.value === 'All'
    ? posts.value
    : posts.value.filter(post => post.category === selected.value)
})

onMounted(async () => {
  const res = await fetch('/api/posts')
  posts.value = await res.json()
})
</script>
