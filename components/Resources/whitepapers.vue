<template>
  <section class=" text-white px-4 md:py-10">
    <div class="max-w-7xl mx-auto space-y-10">
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
            <h3 class="md:text-xl font-semibold">{{ podcast.title }}</h3>
            <div class="flex ml-auto text-yellow-400">
              <span v-for="i in 5" :key="i">★</span>
            </div>
          </div>

          <div>

            <p class="text-[10px] text-justify font-thin md:text-sm">{{ podcast.host }}</p>
          </div>
        </div>

        <div class="md:w-2/3 space-y-4">
          <div class="relative rounded-lg overflow-hidden">
            <img :src="podcast.image" alt="" class="w-full h-56 object-cover" />

          </div>
          <div>
            <p class="text-sm md:text-lg font-medium">{{ podcast.description }}</p>
            <p class="text-[10px] md:text-sm text-gray-400 my-6">{{ podcast.sub }}</p>
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

<div class="border-1 border-gray-900  my-6 md:my-16">

</div>

<div class="max-w-7xl mx-auto space-y-10">
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(resources, index) in resource"
      :key="resources.title"
      class="rounded-lg p-4"
    >
      <div>
        <img
          :src="resources.image"
          alt="Podcast Image"
          class="w-full h-48 object-cover rounded-sm"
        />
      </div>
      <h3 class="md:text-lg text-sm font-semibold mt-3">{{ resources.title }}</h3>
      <p class="text-gray-400 text-[10px] md:text-sm mt-2">{{ resources.Subtitle }}</p>
        <div class="flex gap-4 mt-4">
        <button class="border text-gray-400 text-[10px] border-gray-800 rounded-md p-2">View Details</button>
        <button class="border text-gray-400 text-[10px] border-gray-800 rounded-md p-2">Download PDF Now</button>
    </div>
    </div>

  </div>
</div>


  </section>
</template>

<script setup>


const podcasts = [
  {
    title: 'Quantum Computing Whitepaper',
    host: 'Provides technical specifications and requirements for implementing quantum computing systems.',
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
    title: 'Space Exploration Whitepaper',
    host: 'Explores Mars colonization, asteroid resourxes potential, and space tourism',
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

const resource = [
    {
        title: 'FutureTech Trends 2025',
        Subtitle: 'An ebook  that predicts upcoming technology trends for the next year, including AI developments',
        image: new URL('~/assets/images/TechTrends.svg', import.meta.url).href,
    },
     {
        title: 'Space Exploration Ebook',
        Subtitle: 'An ebook  that predicts upcoming technology trends for the next year, including AI developments',
        image: new URL('~/assets/images/TechTrends.svg', import.meta.url).href,
    },
     {
        title: 'Quantum Computing Whitepaper',
        Subtitle: 'An indepth whitepaper exploring the principles and applications',
        image: new URL('~/assets/images/TechTrends.svg', import.meta.url).href,
    }
]
</script>
