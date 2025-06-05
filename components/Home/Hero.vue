<template>
  <section class="bg-black text-white px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
   
    <div  >
      <p class="text-[10px] md:text-[12px]  uppercase tracking-wide text-gray-400 mb-2">Your Journey to Tomorrow Begins Here</p>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Explore the Frontiers of <br />
        <span class="text-white">Artificial Intelligence</span>
      </h1>
      <p class="text-gray-400 mb-8 text-[10px] md:text-sm">
        Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines
        think, learn, and reshape the future.
      </p>

      
      <div class="grid grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <p class="text-2xl font-semibold text-white">300+</p>
          <p class="text-gray-400 text-sm">Resources available</p>
        </div>
        <div>
          <p class="text-2xl font-semibold text-white">12k+</p>
          <p class="text-gray-400 text-sm">Total Downloads</p>
        </div>
        <div>
          <p class="text-2xl font-semibold text-white">10k+</p>
          <p class="text-gray-400 text-sm">Active Users</p>
        </div>
      </div>
    </div>
<div class="relative hidden md:block">
  <img
    src="~/assets/images/HeroImg.svg"
    alt="AI Illustration"
    class="rounded-lg w-full shadow-lg"
  />

  <div class="absolute bottom-1 right-8 flex -space-x-2">
    <img
      v-for="(src, index) in avatars"
      :key="index"
      :src="src"
      class="w-10 h-10 rounded-full border-2 border-black"
    />
    <div class="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center text-sm font-semibold border-2 border-black">
      +1k
    </div>
  </div>
  <div class="flex flex-col justify-center">
        <div class="flex items-center space-x-4 mb-4">
          <NuxtImg src="/avatars-group.png" alt="Avatars" class="w-16 h-16 rounded-full" />
          <div>
            <h3 class="text-xl font-semibold">Explore 1000+ resources</h3>
            <p class="text-gray-400 text-sm">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
          </div>
        </div>
        <NuxtLink to="/resources" class="inline-flex items-center gap-2 mt-4 text-yellow-400 font-semibold">
          Explore Resources
          <NuxtIcon name="arrow-right" />
        </NuxtLink>
      </div>
</div>

    
  </section>
</template>


<script setup>
import avatar1 from '~/assets/images/hImg1.svg'
import avatar2 from '~/assets/images/hImg2.svg'
import avatar3 from '~/assets/images/hImg3.svg'
import avatar4 from '~/assets/images/hImg4.svg'
const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4
]
</script>
