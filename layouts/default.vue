<template>
	<div class="w-full border-12 border-border h-full min-h-screen overscroll">
		<BaseNav :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
		<div class="my-24 lg:my-36" :class="isMenuOpen ? 'hidden' : ''">
			<Nuxt />
		</div>
	</div>
</template>

<style>
/* set overscroll color on safari only */
/* todo: doesn't work */
/* .overscroll::after,
.overscroll::before {
  left: -1rem;
  right: -1rem;
  position: absolute;
  background: var(--border);
  height: 20.5rem;
}
.overscroll::before {
  top: -20rem;
}
.overscroll::after {
  bottom: -20rem;
} */
</style>

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
