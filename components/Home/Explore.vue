<template>
  <section class="bg-[#0f0f0f] text-white px-4 md:px-16 py-16">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      <div class="relative">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-yellow-500/20 to-transparent"></div>
        <!-- <img src="/ai-bg-light.png" alt="Tech Light Effect" class="w-full h-auto object-cover" /> -->
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
