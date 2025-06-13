<template>
  <section class=" text-white py-16">
    <div class="container mx-auto px-4">
      
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-[#1e1e1e] p-6 rounded-lg shadow-sm"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="testimonial.avatar"
              alt="avatar"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="flex mb-2">
            <span v-for="i in 5" :key="i" class="text-yellow-400">&#9733;</span>
          </div>
          <p class="text-sm text-gray-300">{{ testimonial.feedback }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: testimonials } = await useFetch('/api/testimonial');
</script>
