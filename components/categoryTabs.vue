<template>
  <div class="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:mt-6 ">
    <button
      v-for="category in categories"
      :key="category"
      :class="[
        'px-4 py-2 rounded-full text-sm transition',
        active === category
          ? 'bg-white text-black font-semibold'
          : 'border border-gray-700 text-white'
      ]"
      @click="$emit('select', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps(['active', 'categories'])
defineEmits(['select'])
</script>
