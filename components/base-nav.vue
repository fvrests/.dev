<template>
  <div class="h-24 w-full">
    <!-- TODO fix alignment to sections -->
    <div class="h-24 mx-12 lg:mx-36 flex flex-row items-center justify-between">
      <div
        class="rounded-full border-coal dark:border-night border-4 w-12 h-12 z-50 overflow-hidden"
      >
        <NuxtLink to="/">
          <img src="/portrait.png" class="transform scale-150 z-50" />
        </NuxtLink>
      </div>
      <div
        class="flex flex-col items-center justify-center space-y-1.5 w-10 h-10 cursor-pointer md:hidden absolute top-10 right-10 z-50"
        @click="toggleMenu"
      >
        <div
          class="w-4 h-0.5 transition-transform"
          :class="[
            isMenuOpen
              ? 'transform -rotate-45 translate-y-1 bg-white'
              : 'bg-night dark:bg-white',
          ]"
        />
        <div
          class="w-4 h-0.5 transition-transform"
          :class="[
            isMenuOpen
              ? `bg-white transform rotate-45 -translate-y-1`
              : 'bg-night dark:bg-white',
          ]"
        />
      </div>
      <DesktopNav :links="links" />
      <MobileNav v-if="isMenuOpen" :links="links" />
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
export default {
  components: {
    DesktopNav,
    MobileNav,
  },
  setup() {
    const isMenuOpen = ref()

    const links = [
      {
        name: 'projects',
        url: '/projects',
        themeColor: 'lavender',
      },
      {
        name: 'blog',
        url: '/blog',
        themeColor: 'lemon',
      },
      {
        name: 'about',
        url: '/about',
        themeColor: 'rose',
      },
      {
        name: 'contact',
        url: '/contact',
        themeColor: 'leaf',
      },
    ]

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu,
      links,
    }
  },
}
</script>
