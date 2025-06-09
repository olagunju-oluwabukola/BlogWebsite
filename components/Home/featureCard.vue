<template>
  <div class="bg-[#1e1e1e] rounded-lg p-4 text-white bg-opacity-75">
    <h3 class="font-semibold mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
