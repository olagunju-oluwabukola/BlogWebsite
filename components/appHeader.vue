<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import logo from '~/assets/images/Logo.svg'
import { Menu, X } from 'lucide-vue-next'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'News', to: '/news' },
  { name: 'Podcasts', to: '/podcasts' },
  { name: 'Resources', to: '/resources' }
]

const state = reactive({
  isMenuOpen: false
})

const menuRef = ref(null)
const buttonRef = ref(null)

const handleClickOutside = (event) => {
  if (state.isMenuOpen &&
      menuRef.value &&
      !menuRef.value.contains(event.target) &&
      buttonRef.value &&
      !buttonRef.value.contains(event.target)) {
    state.isMenuOpen = false
  }
}

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside)
  }, 0)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div>
    <TopbarCta />
  </div>

  <header class="sticky top-0 z-50 bg-[#1E1E1E] text-white py-4 px-4 md:px-16 border-b border-gray-900">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img :src='logo' alt="FutureTech Logo" class="w-8 h-8" />
        <span class="text-xl font-bold">FutureTech</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 text-gray-300">
        <NuxtLink
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          class="hover:text-yellow-400 transition"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <NuxtLink
        to="/contact"
        class="hidden md:inline-block ml-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
      >
        Contact Us
      </NuxtLink>

      <button
        ref="buttonRef"
        @click.stop="state.isMenuOpen = !state.isMenuOpen"
        class="md:hidden text-yellow-400 p-2 hover:bg-gray-800 rounded transition"
        aria-label="Toggle menu"
      >
        <Menu v-if="!state.isMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>
  </header>
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="state.isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="state.isMenuOpen = false"
    ></div>
  </transition>
  <transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      v-if="state.isMenuOpen"
      ref="menuRef"
      class="fixed top-0 left-0 h-full w-64 bg-[#1E1E1E] shadow-2xl z-50 md:hidden overflow-y-auto"
    >
      <div class="p-6">
        <div class="flex items-center space-x-2 mb-8">
          <img :src='logo' alt="FutureTech Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-white">FutureTech</span>
        </div>
        <nav class="flex flex-col space-y-1">
          <NuxtLink
            v-for="(item, i) in navItems"
            :key="i"
            :to="item.to"
            class="text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition py-3 px-4 rounded"
            @click="state.isMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="bg-yellow-400 text-black text-center font-semibold px-4 py-3 rounded hover:bg-yellow-300 transition mt-4"
            @click="state.isMenuOpen = false"
          >
            Contact Us
          </NuxtLink>
        </nav>
      </div>
    </div>
  </transition>
</template>