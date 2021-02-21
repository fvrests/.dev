<template>
	<nav class="hidden md:block">
		<ul class="flex font-bold flex-row space-x-6 -mr-1 items-center">
			<li v-for="link in links" :key="link.name">
				<nuxt-link
					:to="link.url"
					class="link px-2 py-1 select-none rounded-lg text-fg dark:hover:text-page border-4 border-transparent hover:border-border dark:hover:border-transparent"
					:class="`hover:bg-${link.themeColor}`"
					:active-class="`bg-${link.themeColor} dark:text-page border-3 border-border dark:border-transparent`"
					>{{ link.name }}</nuxt-link
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		links: {
			type: Array,
			required: true,
		},
	},
}
</script>
