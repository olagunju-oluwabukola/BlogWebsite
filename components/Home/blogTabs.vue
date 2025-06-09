<template>
  <div class="flex gap-4 my-6 overflow-x-auto">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="$emit('update:activeTab', cat)"
      :class="[
        'px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm',
        activeTab === cat ? 'bg-white text-black' : 'border border-gray-700 text-white'
      ]"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps(['categories', 'activeTab'])
defineEmits(['update:activeTab'])
</script>
