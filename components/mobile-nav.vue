<template>
	<div class="md:hidden w-sm">
		<div
			class="fixed w-screen h-screen top-0 left-0 bg-coal dark:bg-night z-30"
		>
			<ul
				class="flex flex-col justify-center items-center font-bold fixed w-screen h-screen top-0 left-0 space-y-16 z-40"
			>
				<li v-for="link in links" :key="link.name">
					<nuxt-link
						:to="link.url"
						class="p-3 text-paper hover:text-night text-3xl select-none rounded-xl"
						@click="toggleMenu"
						:class="`hover:bg-${link.themeColor}`"
						:style="{
							'--themeColor': `var(--color-${link.themeColor})`,
						}"
						>{{ link.name }}</nuxt-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
.nuxt-link-active {
	background-color: var(--themeColor);
	@apply text-night;
}
</style>
<script>
import toggleMenu from './base-nav'
export default {
	props: {
		links: {
			type: Array,
			required: true,
		},
		isMenuOpen: {
			type: Boolean,
			required: true,
		},
	},
	return() {
		toggleMenu
	},
}
</script>
