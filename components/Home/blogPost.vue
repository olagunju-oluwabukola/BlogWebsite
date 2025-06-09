<template>
  <div class="bg-[#0a0a0a] text-white py-6 border-b border-gray-800 flex gap-4">
    <img :src="post.avatar" alt="avatar" class="w-10 h-10 rounded-full mt-1" />
    <div class="flex-1">
      <div class="text-sm text-gray-400">
        {{ post.author }} • {{ post.date }}
      </div>
      <NuxtLink :to="`/blog/${post.id}`" class="text-xl font-semibold text-white hover:underline mt-1 block">
        {{ post.title }}
      </NuxtLink>
      <p class="text-sm text-gray-400 mt-1">{{ post.summary }}</p>
      <div class="flex gap-4 mt-2 text-sm text-gray-500">
        <span>❤️ {{ post.likes.toLocaleString() }}</span>
        <span>💬 {{ post.comments }}</span>
        <span>🔁 {{ post.shares }}</span>
      </div>
    </div>
    <NuxtLink :to="`/blog/${post.id}`" class="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded self-start">
      View Blog →
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['post'])
</script>
