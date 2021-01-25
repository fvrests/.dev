<template>
	<a
		v-if="isExternal"
		class="link font-bold dark:hover:text-lavender relative"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:href="url"
		><slot
	/></a>
	<nuxt-link
		v-else
		class="link font-bold dark:hover:text-lavender relative"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:to="url"
		><slot
	/></nuxt-link>
</template>

<style>
.link::before {
	content: '';
	transition: all 50ms ease;
	transition-property: width height bottom left;
	z-index: -10;
	background-color: var(--themeColor);
	bottom: -0.2rem;
	@apply absolute h-0.5 w-full left-0;
}
.link:hover::before {
	bottom: -0.1rem;
}

@media (prefers-color-scheme: light) {
	.link::before {
		z-index: -10;
		@apply bg-lavender h-1 -bottom-1;
	}
	.link:hover::before {
		@apply bg-rose h-1.5;
	}
}
</style>
<script>
export default {
	props: {
		url: { type: String, required: true },
		themeColor: { type: String, default: 'rose' },
	},
	setup(props) {
		let isExternal = props.url.startsWith('http') || false
		return {
			isExternal,
		}
	},
}
</script>
