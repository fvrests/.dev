<template>
	<a
		v-if="isExternal"
		class="button"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:href="url"
		><slot
	/></a>
	<nuxt-link
		v-else
		class="button"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:to="url"
		><slot
	/></nuxt-link>
</template>

<style scoped>
.button {
	background-color: var(--themeColor);
	@apply relative z-10 font-bold px-2 py-1 border-4 text-coal border-coal rounded-lg opacity-90;
}
.button:hover {
	@apply text-coal dark:text-night opacity-100;
}
.dark .button {
	border-color: var(--themeColor);
}
</style>
<script>
export default {
	props: {
		themeColor: { type: String, default: 'rose' },
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
