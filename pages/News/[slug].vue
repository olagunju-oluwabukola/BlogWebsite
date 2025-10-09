<template>
  <section class="p-10 text-white bg-black md:min-h-screen">
     <NuxtLink to="/news" class="text-yellow-400 mb-4 block">← Back</NuxtLink>

    <div class="max-w-3xl mx-auto">
      <h1 class="text-md md:text-2xl font-bold mb-4 capitalize">{{ article?.title }}</h1>
      <img :src="article?.image" class="w-full md:h-90 rounded-xl mb-6" />
      <p class="text-gray-400 mb-2 text-[10px] md:text-sm">Category: {{ article?.category }}</p>
      <p class="text-gray-400 mb-6 text-[10px] md:text-sm">Views: {{ article?.views }}  </p>
      <p class="text-gray-400 mb-6 text-[10px] md:text-sm">Comment: {{ article?.comments }}</p>
      <p class="text-sm text-gray-400 leading-loose text-justify">{{ article.content  }} </p>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const { data: allNews } = await useFetch('/api/news')

const article = computed(() =>
  route.params.slug === allNews.value.featured.slug
    ? allNews.value.featured
    : allNews.value.articles.find((a) => a.slug === route.params.slug)
)
</script>
