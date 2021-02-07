<template>
	<Section>
		<div class="h-24 flex flex-row items-center justify-between">
			<div
				class="rounded-full border-night border-4 w-12 h-12 transition-all duration-100 opacity-90 hover:opacity-100 z-50 overflow-hidden"
			>
				<NuxtLink to="/">
					<img src="/portrait.png" class="transform scale-150 z-50" />
				</NuxtLink>
			</div>
			<div class="flex flex-row space-x-8 items-center">
				<DesktopNav :links="links" />
				<MobileNav v-if="isMenuOpen" :links="links" />
				<ColorModeToggle />
				<button
					class="flex flex-col items-center justify-center space-y-1 w-10 h-10 cursor-pointer md:hidden z-50"
					@click="toggleMenu"
				>
					<div
						class="w-4 h-1 transition-transform rounded-sm"
						:class="[
							isMenuOpen
								? 'transform -rotate-45 translate-y-1 bg-paper'
								: 'bg-night dark:bg-paper',
						]"
					/>

					<div
						class="w-4 h-1 transition-transform rounded-sm"
						:class="[
							isMenuOpen
								? `bg-paper transform rotate-45 -translate-y-1`
								: 'bg-night dark:bg-paper',
						]"
					/>
				</button>
			</div>
		</div>
	</Section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
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
