<template>
    <div class="min-h-screen bg-black text-white ">
    <div class="grid md:flex justify-between gap-4 md:gap-20 lg:gap-26 items-start border-gray-800 md:pt-10 mb-10 md:mb-16 px-6  md:px-20">
      <div class="md:col-span-1 flex flex-col items-start m-auto">
        <div class="flex items-center space-x-2 mb-3 md:mb-4">
         <img src="~/assets/images/blogIcon.svg" alt="Blog Icon" class="w-6 h-6 md:w-8 md:h-8">
          <h2 class="text-lg md:text-3xl font-semibold">Future Technology Blog</h2>
        </div>
        <p class="text-gray-400 text-sm md:text-base mb-4 ">
          Stay informed with our blog section dedicated to future technology.
        </p>
      </div>

      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <HomeFeatureCard
          v-for="(item, index) in techBlogFeatures"
          :key="'tech-' + index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>

    <div class="grid md:flex justify-between gap-4 md:gap-20 lg:gap-26 items-start border-t border-gray-800 md:pt-10 mb-8 md:mb-16 py-12 px-6 md:px-20">
      <div class="md:col-span-1 flex flex-col items-start  md:pr-16 m-auto">
        <div class="flex items-center space-x-2 mb-3 md:mb-4">
            <img src="~/assets/images/researchIcon.svg" alt="Research Icon" class="w-6 h-6 md:w-8 md:h-8">
          <h2 class="text-lg md:text-3xl font-semibold">Research Insights Blogs</h2>
        </div>
        <p class="text-gray-400 text-sm md:text-sm">
          Dive deep into future technology concepts with our research section.
        </p>
      </div>

      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <HomeFeatureCard
          v-for="(item, index) in researchFeatures"
          :key="'research-' + index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

const techBlogFeatures = [
  { title: 'Quantity', description: 'Over 1,000 articles on emerging tech trends and breakthroughs.' },
  { title: 'Variety', description: 'Articles cover fields like AI, robotics, biotechnology, and more.' },
  { title: 'Frequency', description: 'Fresh content added daily to keep you up to date.' },
  { title: 'Authoritative', description: 'Written by our team of tech experts and industry professionals.' },
]

const researchFeatures = [
  { title: 'Depth', description: '500+ research articles for in-depth understanding.' },
  { title: 'Graphics', description: 'Visual aids and infographics to enhance comprehension.' },
  { title: 'Trends', description: 'Explore emerging trends in future technology research.' },
  { title: 'Contributors', description: 'Contributions from tech researchers and academics.' },
]
</script>
