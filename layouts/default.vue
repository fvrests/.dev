<template>
	<div class="w-full h-full min-h-screen">
		<BaseNav :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
		<div class="my-24 lg:my-36" :class="isMenuOpen ? 'hidden' : ''">
			<Nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
	setup() {
		const isMenuOpen = ref(false)
		function toggleMenu() {
			isMenuOpen.value = !isMenuOpen.value
		}
		return {
			isMenuOpen,
			toggleMenu,
		}
	},
}
</script>
