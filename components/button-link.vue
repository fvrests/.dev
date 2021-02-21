<template>
	<a
		v-if="isExternal"
		class="button"
		:style="
			({ '--themeColor': `var(--${themeColor})`, '--themeColorAlt': `var(--${themeColor}-alt)` })
		"
		:href="url"
		><slot
	/></a>
	<nuxt-link
		v-else
		class="button"
		:style="({ '--themeColor': `var(--${themeColor})`, '--themeColorAlt': `var(--${themeColor}-alt)` })"
		:to="url"
		><slot
	/></nuxt-link>
</template>

<style scoped>
.button {
	background-color: var(--themeColor);
	@apply relative text-sm z-10 font-bold px-2 py-1 border-4 border-border rounded-lg;
}
.button:hover {
	background-color: var(--themeColorAlt);
}
.dark .button {
	border-color: var(--themeColor);
	@apply text-page;
}
.dark .button:hover {
	border-color: var(--themeColorAlt);
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
