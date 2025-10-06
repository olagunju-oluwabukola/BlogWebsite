<template>
  <section class=" text-white px-4 py-10">
    <div class="max-w-7xl mx-auto">

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="video in videos"
          :key="video.title"
          class=" rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl"
        >
          <div class="relative">
            <img :src="video.image" alt="video image" class="w-full h-48 object-cover" />
            <button class="absolute left-3 bottom-3 bg-white text-black rounded-full p-2">
              ▶
            </button>
            <span class="absolute right-3 bottom-3 bg-black text-sm px-2 py-1 rounded">
              {{ video.duration }}
            </span>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-medium">{{ video.title }}</h3>
            <p class="text-sm text-gray-400 mt-1">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '~/assets/images/marsImg.svg';
import img2 from '~/assets/images/BlockchainVideo.svg';
import img3 from '~/assets/images/mentalHealthVideo.svg';
import img4 from '~/assets/images/InvestmentVideo.svg';
const videos = [
  {
    title: 'Mars Exploration: Unveiling Alien Landscapes',
    description: 'Embark on a journey through the Red Planet’s surreal landscapes.',
    duration: '2:30 min',
    image: img1,
  },
  {
    title: 'Blockchain Explained: A Revolution in Finance',
    description: 'Discover how blockchain is reshaping finance.',
    duration: '2:00 min',
    image: img2,
  },
  {
    title: 'Breaking the Silence: Mental Health Awareness in the Workplace',
    description: 'The importance of mental health awareness in the workplace.',
    duration: '3:20 min',
    image: img3,
    },
  {
    title: 'Revolutionizing Investment Strategies',
    description: 'New strategies to navigate volatile financial landscapes.',
    duration: '2:30 min',
    image: img4,
  },
];
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
