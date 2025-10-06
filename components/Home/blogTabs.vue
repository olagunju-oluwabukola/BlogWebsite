<template>
  <div class="my-6">

    <div class="block md:hidden">
      <select
        v-model="localActiveTab"
        @change="$emit('update:activeTab', localActiveTab)"
        class="bg-black text-white border border-gray-700 rounded-lg px-3 py-2 w-full"
      >
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <div class="hidden md:flex gap-4 overflow-x-auto">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="$emit('update:activeTab', cat)"
        :class="[
          'px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm whitespace-nowrap transition-all',
          activeTab === cat
            ? 'bg-white text-black'
            : 'border border-gray-700 text-white hover:bg-gray-800'
        ]"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['categories', 'activeTab'])
const emit = defineEmits(['update:activeTab'])

const localActiveTab = ref(props.activeTab)

watch(
  () => props.activeTab,
  (newVal) => {
    localActiveTab.value = newVal
  }
)
</script>
