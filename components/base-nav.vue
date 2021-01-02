<template>
  <div class="h-24 w-full">
    <div class="h-24 flex flex-row items-center justify-between mx-8">
      <router-link to="/" class="title font-display text-2xl md:text-4xl"
        >fvrests
      </router-link>
      <div
        class="flex flex-col items-center justify-center space-y-1 w-10 h-10 cursor-pointer sm:hidden absolute top-10 right-10 z-50"
        @click="toggleMenu"
      >
        <div
          class="w-4 h-0.5 bg-white transition-transform"
          :class="[isMenuOpen ? 'rotate-45' : '']"
        />
        <div
          class="w-4 h-0.5 bg-white transition-transform"
          :class="[isMenuOpen ? `-rotate-45` : '']"
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
        name: 'about',
        url: '/about',
        classes: 'hover:bg-rose',
        activeClasses: 'bg-rose text-night',
      },
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
