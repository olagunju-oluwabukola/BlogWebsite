<template>
  <section ref="counterSection" class="bg-black text-white px-4 md:px-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-10">
      <div class="text-center border border-gray-700 p-6 rounded-lg">
        <p class="text-3xl font-bold text-yellow-400">{{ Math.floor(stats[0].current) }}+</p>
        <p class="text-gray-400 mt-2">Resources Available</p>
      </div>
      <div class="text-center border border-gray-700 p-6 rounded-lg">
        <p class="text-3xl font-bold text-yellow-400">{{ Math.floor(stats[1].current / 1000) }}k+</p>
        <p class="text-gray-400 mt-2">Total Download</p>
      </div>
      <div class="text-center border border-gray-700 p-6 rounded-lg">
        <p class="text-3xl font-bold text-yellow-400">{{ Math.floor(stats[2].current / 1000) }}k+</p>
        <p class="text-gray-400 mt-2">Active Users</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const counterSection = ref(null)
const stats = ref([
  { target: 300, current: 0 },
  { target: 12000, current: 0 },
  { target: 10000, current: 0 }
])

let observer = null
let hasAnimated = false

const animateCounters = () => {
  stats.value.forEach((stat) => {
    const duration = 2000
    const stepTime = 16
    const increment = stat.target / (duration / stepTime)

    const counter = setInterval(() => {
      stat.current += increment
      if (stat.current >= stat.target) {
        stat.current = stat.target
        clearInterval(counter)
      }
    }, stepTime)
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true
        animateCounters()
      }
    },
    { threshold: 0.3 }
  )

  if (counterSection.value) observer.observe(counterSection.value)
})

onBeforeUnmount(() => {
  if (observer && counterSection.value) observer.unobserve(counterSection.value)
})
</script>
