<template>
	<Section>
		<nav class="h-24 flex flex-row items-center justify-between">
			<div
				class="rounded-full border-border border-4 w-12 h-12 transition-all duration-100 opacity-90 hover:opacity-100 z-50 overflow-hidden"
				v-on="isMenuOpen ? { click: toggleMenu } : {}"
			>
				<NuxtLink to="/">
					<img src="/portrait.png" class="transform scale-150 z-50" />
				</NuxtLink>
			</div>
			<div class="flex flex-row items-center">
				<ColorModeToggle class="mr-8" />
				<DesktopNav :links="links" />
				<transition
					enter-active-class="transition-all transition-fastest ease-out-quad"
					leave-active-class="transition-all transition-fastest ease-in-quad"
					enter-class="opacity-0"
					enter-to-class="opacity-100"
					leave-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<MobileNav
						v-if="isMenuOpen"
						:links="links"
						:toggleMenu="toggleMenu"
					/>
				</transition>
				<button
					class="flex flex-col items-center justify-center space-y-1 w-10 h-10 cursor-pointer md:hidden z-50"
					@click="toggleMenu"
				>
					<div
						class="w-4 h-1 transition-transform duration-100 rounded-sm bg-fg"
						:class="[
							isMenuOpen
								? 'transform -rotate-45 translate-y-1'
								: '',
						]"
					/>

					<div
						class="w-4 h-1 transition-transform duration-100 rounded-sm bg-fg"
						:class="[
							isMenuOpen
								? `transform rotate-45 -translate-y-1`
								: '',
						]"
					/>
				</button>
			</div>
		</nav>
	</Section>
</template>

<script>
// import { ref } from '@nuxtjs/composition-api'

export default {
	props: {
		isMenuOpen: { type: Boolean, required: true },
		toggleMenu: { type: Function },
	},
	setup() {
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
		]
		return {
			links,
		}
	},
}
</script>
