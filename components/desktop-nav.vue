<template>
	<nav class="hidden md:inline-block">
		<ul class="flex font-bold flex-row space-x-6 -mr-1">
			<li v-for="link in links" :key="link.name">
				<nuxt-link
					:to="link.url"
					class="link p-1 select-none rounded-md hover:text-night border-3 border-transparent light:hover:border-coal"
					:class="`hover:bg-${link.themeColor}`"
					:active-class="`bg-${link.themeColor} text-night border-3 border-transparent light:border-coal`"
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
