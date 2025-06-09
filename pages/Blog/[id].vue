<template>
  <div class="min-h-screen p-6 text-white bg-black">
    <NuxtLink to="/" class="text-yellow-400 mb-4 block">← Back</NuxtLink>

    <h1 class="text-3xl font-bold mb-2">{{ blog.title }}</h1>
    <p class="text-sm text-gray-400">{{ blog.category }} | {{ formatDate(blog.date) }}</p>

    <p class="my-6">{{ blog.description }}</p>
    <p>{{ blog.content}}</P>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: blogs } = await useFetch('/api/post')
const blog = blogs.value.find(b => b.id === Number(route.params.id))

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
