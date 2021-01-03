<template>
  <div class="h-24 w-full">
    <!-- TODO fix alignment to sections -->
    <div class="h-24 mx-6 sm:mx-32 flex flex-row items-center justify-between">
      <router-link to="/" class="title font-display text-xl sm:text-3xl z-50"
        >fvrests
      </router-link>
      <div
        class="flex flex-col items-center justify-center space-y-1.5 w-10 h-10 cursor-pointer sm:hidden absolute top-10 right-10 z-50"
        @click="toggleMenu"
      >
        <div
          class="w-4 h-0.5 bg-white transition-transform"
          :class="[isMenuOpen ? 'transform rotate-45 translate-y-1' : '']"
        />
        <div
          class="w-4 h-0.5 bg-white transition-transform"
          :class="[isMenuOpen ? `transform -rotate-45 -translate-y-1` : '']"
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
        classes: 'hover:bg-lavender',
        activeClasses: 'bg-lavender text-night',
      },
      {
        name: 'blog',
        url: '/blog',
        classes: 'hover:bg-lemon',
        activeClasses: 'bg-lemon text-night',
      },
      {
        name: 'about',
        url: '/about',
        classes: 'hover:bg-rose',
        activeClasses: 'bg-rose text-night',
      },
      {
        name: 'contact',
        url: '/contact',
        classes: 'hover:bg-leaf',
        activeClasses: 'bg-leaf text-night',
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
