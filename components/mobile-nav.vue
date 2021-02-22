<template>
	<div class="md:hidden w-sm">
		<div
			class="fixed w-screen h-screen top-0 left-0 bg-surface dark:bg-border z-30"
		>
			<ul
				class="flex flex-col justify-center items-center font-bold fixed w-screen h-screen top-0 left-0 space-y-16 z-40"
			>
				<li v-for="link in links" :key="link.name">
					<span @click="toggleMenu">
						<nuxt-link
							:to="link.url"
							class="p-3 text-fg hover:text-fgBright dark:hover:text-page text-2xl select-none rounded-xl"
							:class="`hover:bg-${link.themeColor}`"
							:style="{
								'--themeColor': `var(--${link.themeColor})`,
							}"
							>{{ link.name }}</nuxt-link
						>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
.nuxt-link-active {
	background-color: var(--themeColor);
	@apply dark:text-page;
}
</style>
<script>
export default {
	props: {
		links: {
			type: Array,
			required: true,
		},
		toggleMenu: { type: Function },
	},
	return() {
		toggleMenu
	},
}
</script>
