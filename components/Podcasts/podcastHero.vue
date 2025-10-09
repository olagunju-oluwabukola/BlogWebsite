<template>
  <section class=" text-white px-4 py-10">
    <div class="max-w-7xl mx-auto space-y-10">
 <div class="text-center md:text-left flex ">
        <h2 class=" md:text-5xl font-bold mb-2">Unlock the World of Artificial Intelligence through Podcasts
              <span class="text-gray-400 font-thin mx-auto md:mx-0 text-sm">
          Dive deep into the AI universe with our curated podcast series. Whether you're an enthusiast or a professional, AI podcasts are your gateway to innovation.
              </span>
        </h2>

      </div>

<!-- mobile -->
      <div class="text-center md:text-left md:hidden">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">Unlock the World of Artificial Intelligence through Podcasts</h2>
        <p class="text-gray-400 max-w-2xl mx-auto md:mx-0">
          Dive deep into the AI universe with our curated podcast series. Whether you're an enthusiast or a professional, AI podcasts are your gateway to innovation.
        </p>
      </div>

      <div
        v-for="(podcast, index) in podcasts"
        :key="podcast.title"
        class="flex flex-col md:flex-row md:items-start gap-6"
      >
        <!-- Left Info Box -->
        <div class=" p-6 rounded-lg md:w-1/3 shadow-md space-y-4">
          <div class="flex items-center space-x-3">
            <div class="md:w-10 md:h-10 w-7 h-7">
                <img :src="podcast.icon" alt="Podcast Image" class="w-full h-full object-cover rounded-sm" />
            </div>
            <h3 class="text-xl font-semibold">{{ podcast.title }}</h3>
            <div class="flex ml-auto text-yellow-400">
              <span v-for="i in 5" :key="i">★</span>
            </div>
          </div>

          <div>
            <p class="text-sm text-gray-400 mb-1">Host</p>
            <p class="text-md font-medium">{{ podcast.host }}</p>
          </div>

          <button class="text-sm bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400">
            Listen Podcast →
          </button>
        </div>

        <div class="md:w-2/3 space-y-4">
          <div class="relative rounded-lg overflow-hidden">
            <img :src="podcast.image" alt="" class="w-full h-56 object-cover" />

          </div>
          <div>
            <p class="text-lg font-medium">{{ podcast.description }}</p>
            <p class="text-sm text-gray-400 mt-2">{{ podcast.sub }}</p>
            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
              <div class='bg-[#1e1e1e] p-2 rounded-lg  leading-loose text-sm'>
                  Total Episodes
                <span class="block  font-bold text-white">{{ podcast.stats.total }}</span>

              </div>
              <div class='bg-[#1e1e1e] p-2 rounded-lg leading-loose text-sm'>
                Average Episode Length
                <span class="block font-bold text-white">{{ podcast.stats.length }}</span>

              </div>
              <div class='bg-[#1e1e1e] p-2 rounded-lg  leading-loose text-sm'>
                Release Frequency
                <span class="block font-bold text-white">{{ podcast.stats.frequency }}</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const podcasts = [
  {
    title: 'AI Revolution',
    host: 'Dr. Sarah Mitchell',
    image: new URL('~/assets/images/TransformVideo.svg', import.meta.url).href,
    icon: new URL('~/assets/images/aiRevIcon.svg', import.meta.url).href,
    description:
      'Delves into the transformative impact of AI on industries, featuring interviews and research studies.',
      sub:'AI Revolution is a podcast that explores the transformative impact of artificial intelligence on various industries. Each episode features interviews with leading experts and researchers, discussing the latest advancements, challenges, and future prospects of AI technology.',
    stats: {
      total: '50',
      length: '30 min',
      frequency: 'Weekly',
    },
  },
  {
    title: 'AI Conversations',
    host: 'Mark Anderson',
    image: new URL('~/assets/images/TechTrends.svg', import.meta.url).href,
     icon: new URL('~/assets/images/AiConIcon.svg', import.meta.url).href,
    description:
      'Engage in thought-provoking conversations with leading experts in AI and technology ethics.',
    sub:'AI Conversations is a podcast that engages in thought-provoking discussions with leading experts in the fields of artificial intelligence and technology ethics. Each episode features in-depth conversations about the implications of AI on society, privacy, and the future of work.',
      stats: {
      total: '40',
      length: '40 min',
      frequency: 'Monthly',
    },
  },
];
</script>
