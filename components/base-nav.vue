<template>
  <div class="h-24 w-full">
    <!-- TODO fix alignment to sections -->
    <div class="h-24 mx-12 lg:mx-36 flex flex-row items-center justify-between">
      <nuxt-link
        to="/"
        class="title font-display text-3xl z-50 hover:border-coal hover:border-3"
        >fvrests
      </nuxt-link>
      <div
        class="flex flex-col items-center justify-center space-y-1.5 w-10 h-10 cursor-pointer md:hidden absolute top-10 right-10 z-50"
        @click="toggleMenu"
      >
        <div
          class="w-4 h-0.5 bg-white light:bg-night transition-transform"
          :class="[isMenuOpen ? 'transform -rotate-45 translate-y-1' : '']"
        />
        <div
          class="w-4 h-0.5 bg-white light:bg-night transition-transform"
          :class="[isMenuOpen ? `transform rotate-45 -translate-y-1` : '']"
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
