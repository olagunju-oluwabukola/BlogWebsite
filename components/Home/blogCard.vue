<template>
  <div class="bg-[#1e1e1e] p-6 rounded-lg  transition-colors duration-200">
    <div class="flex flex-col md:flex-row gap-6">
    
      <div class="flex items-start gap-4 min-w-[120px]">
        <img 
          :src="blog.avatar" 
          alt="author" 
          class="w-10 h-10 rounded-full border border-gray-700 object-cover"
        />
        <div>
          <p class="text-xs font-medium text-gray-300">{{ blog.author }}</p>
          <p class="text-xs text-gray-500 mt-0.5">{{ blog.category }}</p>
        </div>
      </div>

      <div class="flex-1 space-y-2">
        <p class="text-xs text-gray-500">{{ formatDate(blog.date) }}</p>
        <NuxtLink 
          :to="`/blog/${blog.id}`" 
          class="text-base md:text-lg font-semibold text-white hover:text-yellow-400 transition-colors line-clamp-2"
        >
          {{ blog.title }}
        </NuxtLink>
        <p class="text-[10px] md:text-sm text-gray-400 line-clamp-2">{{ blog.summary }}</p>
        
       
        <div class="flex gap-4 pt-2 text-sm text-gray-500">
          <span class="flex items-center gap-1 border border-gray-700 px-2 rounded-lg">
            <Icon name="uil:heart" class="text-sm md:text-base " /> {{ blog.likes }}
          </span>
          <span class="flex items-center gap-1 border border-gray-700 px-2 rounded-lg">
            <Icon name="uil:comment" class="text-sm md:text-base" /> {{ blog.comments }}
          </span>
          <span class="flex items-center gap-1 border border-gray-700 px-2 rounded-lg">
            <Icon name="uil:redo" class="text-sm md:text-base" /> {{ blog.shares }}
          </span>
        </div>
      </div>

      <div class="self-end md:self-center">
        <NuxtLink 
          :to="`/blog/${blog.id}`" 
          class="border border-gray-700 px-2 py-2 md:px-3 md:py-3 rounded-lg text-yellow-400 hover:text-yellow-300 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          Read more <Icon name="uil:arrow-up-right" class="text-base" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['blog'])

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>