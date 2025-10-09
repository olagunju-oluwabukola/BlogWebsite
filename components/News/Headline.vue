<template>
  <section class="bg-black text-white py-12 px-6 md:px-20 space-y-12">

  <section class="bg-black text-white">
    <div class="max-w-4xl ">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        Today’s Headlines: Stay  Informed.
      </h1>
      <p class="mt-2 text-gray-400 text-sm md:text-base leading-relaxed text-justify">

        Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
      </p>
    </div>
  </section>

    <div class="p-6 rounded-xl flex flex-col md:flex-row gap-6">
      <img :src="news.featured.image" alt="Featured" class="rounded-xl w-full md:w-1/3 object-cover h-60 md:h-auto" />
      <div class="flex-1 space-y-4">
        <h2 class="text-xl md:text-2xl font-semibold">{{ news.featured.title }}</h2>
        <p class="text-gray-400">{{ news.featured.description }}</p>
        <div class="flex flex-wrap text-sm text-gray-400 gap-4">
          <span>Category: <span class="text-white">{{ news.featured.category }}</span></span>
          <span>Publication Date: {{ news.featured.date }}</span>
          <span>Author: {{ news.featured.author }}</span>
        </div>
        <div class=" flex items-center gap-4 mt-2 text-gray-400 text-sm">
        <div class='flex gap-1'>
          <div class="flex items-center gap-1 p-1 border border-gray-400 rounded-sm">
            <Icon icon="uil:eye" class="text-lg" />
            {{ news.featured.views }}
          </div>
          <span class="flex items-center gap-1 p-1 border border-gray-400 rounded-sm">
                <Icon icon="uil:comment" class="text-base" />
                {{ news.featured.comments }}
              </span>
          </div>
          <NuxtLink
            :to="`/news/${news.featured.slug}`"
            class="ml-auto text-sm text-white border border-gray-400 px-4 py-1 rounded-sm hover:bg-white hover:text-black transition"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(article, index) in news.articles" :key="index" class=" rounded-xl overflow-hidden">
        <img :src="article.image" alt="Article" class="h-40 w-full object-cover" />
        <div class="p-4 space-y-2">
          <h3 class="text-md font-semibold">{{ article.title }}</h3>
          <p class="text-sm text-gray-400">{{ article.category }}</p>
          <div class="flex items-center justify-between text-sm text-gray-400">
            <div class="flex gap-3 items-center">
              <span class="flex items-center gap-1 p-1 border border-gray-400 rounded-sm">
                <Icon icon="uil:eye" class="text-base " />
                {{ article.views }}
              </span>
              <span class="flex items-center gap-1 p-1 border border-gray-400 rounded-sm">
                <Icon icon="uil:comment" class="text-base" />
                {{ article.comments }}
              </span>
            </div>
            <NuxtLink
              :to="`/news/${article.slug}`"
              class="text-sm text-white border border-gray-400 px-3 py-1 rounded-sm transition"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const { data: news } = await useFetch('/api/news')
</script>
