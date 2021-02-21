<template>
	<a v-if="isExternal" class="text-link" :href="url"><slot /></a>
	<nuxt-link v-else class="text-link" :to="url"><slot /></nuxt-link>
</template>

<style>
.text-link {
	@apply font-bold text-fgSubtle hover:text-fg dark:hover:text-lavender relative;
}
.text-link::before {
	content: '';
	@apply absolute h-1 -bottom-1 w-full left-0 bg-lavender transition-all duration-300;
}
.text-link:hover::before {
	@apply bg-rose;
}
</style>

<script>
export default {
	props: {
		url: { type: String, required: true },
	},
	setup(props) {
		let isExternal = props.url.startsWith('http') || false
		return {
			isExternal,
		}
	},
}
</script>
