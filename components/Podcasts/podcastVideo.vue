<template>
  <section class="text-white px-4 py-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="video in paginatedVideos"
          :key="video.title"
          class="rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl"
        >
          <div class="relative">
            <img :src="video.image" alt="video image" class="w-full  object-cover" />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-medium">{{ video.title }}</h3>
            <p class="text-sm text-gray-400 mt-1">{{ video.description }}</p>
          </div>
          <div class="p-4 pt-0">
            <button
              class="text-[10px] md:text-xs border border-gray-700 px-2 py-1 rounded flex items-center gap-1"
            >
              Listen Now
              <Icon name="uil:arrow-up-right" class="text-xl text-yellow-400" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center gap-2 mt-8 md:hidden">

        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="w-8 h-8 flex items-center justify-center bg-yellow-500 text-black font-bold rounded disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-8 h-8 flex items-center justify-center border border-yellow-500 rounded font-medium text-sm',
            page === currentPage
              ? 'bg-yellow-500 text-black'
              : 'text-yellow-500 hover:bg-yellow-500 hover:text-black transition',
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="w-8 h-8 flex items-center justify-center bg-yellow-500 text-black font-bold rounded disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import img1 from '~/assets/images/marsImg.svg'
import img2 from '~/assets/images/BlockchainVideo.svg'
import img3 from '~/assets/images/mentalHealthVideo.svg'
import img4 from '~/assets/images/InvestmentVideo.svg'

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
   {
    title: 'Revolutionizing Investment Strategies',
    description: 'New strategies to navigate volatile financial landscapes.',
    duration: '2:30 min',
    image: img4,
  },
   {
    title: 'Revolutionizing Investment Strategies',
    description: 'New strategies to navigate volatile financial landscapes.',
    duration: '2:30 min',
    image: img4,
  },
]

const currentPage = ref(1)
const itemsPerPage = 3
const isSmallScreen = ref(false)

const checkScreen = () => {
  isSmallScreen.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})

const totalPages = computed(() =>
  isSmallScreen.value ? Math.ceil(videos.length / itemsPerPage) : 1
)

const paginatedVideos = computed(() => {
  if (!isSmallScreen.value) return videos
  const start = (currentPage.value - 1) * itemsPerPage
  return videos.slice(start, start + itemsPerPage)
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function goToPage(page) {
  currentPage.value = page
}
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
