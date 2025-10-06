<template>
  <section class=" text-white md:py-16 px-6 md:px-20">
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div class="bg-[#111] p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-2">Ebooks</h3>
        <p class="text-gray-400 mb-4">
          Explore our collection of ebooks covering a wide spectrum of future technology topics.
        </p>
        <button class="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
          {{ data.buttonLabel }}
        </button>

        <div class="flex mt-6 items-center space-x-3">
          <img src="/img/hImg1.svg" alt="Users" class="w-10 h-10 rounded-full" />
          <p class="text-gray-400 text-sm">Downloaded by <strong>{{ data.downloadCount }}</strong></p>
        </div>
      </div>

      <div class="bg-[#111] p-6 rounded-lg space-y-4">
        <h3 class="text-lg font-medium">Variety of Topics</h3>
        <p class="text-sm text-gray-400">
          Topics include
          <span v-for="(topic, index) in data.ebooks.topics" :key="index">
            {{ topic.name }} ({{ topic.percentage }})<span v-if="index < data.ebooks.topics.length - 1">, </span>
          </span>
        </p>

        <img :src="data.previewImage" alt="Preview" class="w-full rounded-md mt-4" />

        <div class="bg-[#222] rounded p-4 flex flex-col gap-2">
          <p class="text-sm"><strong>Total Ebooks:</strong> {{ data.ebooks.count }}</p>
          <p class="text-sm"><strong>Download Format:</strong> {{ data.ebooks.format }}</p>
          <button class="text-yellow-400 text-sm text-left hover:underline">Preview →</button>
        </div>

        <p class="text-xs text-gray-500">{{ data.authorExpertise }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch('/api/ebook')
</script>