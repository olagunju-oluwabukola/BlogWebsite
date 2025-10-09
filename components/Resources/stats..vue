<template>
  <section ref="sectionRef" class="bg-black text-white mb-6 py-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="text-center rounded-lg"
      >
        <p class="text-3xl font-bold text-yellow-400">
          {{ Math.floor(stat.current) }}+
        </p>
        <p class="text-gray-400 mt-2">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const stats = ref([
  { label: 'Resources Available', target: 300, current: 0 },
  { label: 'Total Downloads', target: 12000, current: 0 },
  { label: 'Active Users', target: 10000, current: 0 },
  { label: 'Access Our Content', target: 1000, current: 0 }
])

const startCounting = () => {
  stats.value.forEach(stat => {
    let count = 0
    const duration = 1000
    const increment = stat.target / (duration / 16)

    const counter = setInterval(() => {
      count += increment
      if (count >= stat.target) {
        count = stat.target
        clearInterval(counter)
      }
      stat.current = count
    }, 16)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
