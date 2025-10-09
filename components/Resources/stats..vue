<template>
  <section ref="sectionRef" class="bg-black text-white mb-6 py-10">
   <div class="grid grid-cols-4 gap-6 text-center md:text-left border-t border-gray-900 pt-3 px-4 md:px-28">
        <div class="border-r border-gray-900 pr-6">
      <p class="text-xl md:text-2xl font-semibold text-yellow-400">{{  Math.floor(stats[0].current)  }}k+</p>
          <p class="text-gray-400 text-[10px] md:text-sm ">Resources available</p>
        </div>
        <div class="border-r border-gray-900 pr-6">
          <p class="text-xl md:text-2xl font-semibold text-yellow-400">{{ Math.floor(stats[1].current / 1000) }}k+</p>
          <p class="text-gray-400 text-[10px] md:text-sm">Total Downloads</p>
        </div>
        <div>
          <p class="text-xl md:text-2xl font-semibold text-yellow-400">{{ Math.floor(stats[2].current / 1000) }}k+</p>
          <p class="text-gray-400 text-[10px] md:text-sm">Active Users</p>
        </div>

         <div>
          <p class="text-xl md:text-2xl font-semibold text-yellow-400">{{ Math.floor(stats[3].current / 1000) }}k+</p>
          <p class="text-gray-400 text-[10px] md:text-sm">Access Our Content</p>
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
  { label: 'Access Our Content', target: 10000, current: 0 }
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
