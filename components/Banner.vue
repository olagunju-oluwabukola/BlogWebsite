<template>
  <div class="bg-[#1e1e1e] py-3 md:py-8 px-4 lg:px-24 mb-12 text-white">
    <button
      v-if="label"
      class="text-[10px] md:text-xs border border-gray-700 px-2 py-1 rounded mb-2"
    >
      {{ label }}
    </button>
    <h1 class="text-md md:text-3xl font-bold">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
