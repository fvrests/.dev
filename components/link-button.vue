<template>
	<a
		v-if="isExternal"
		class="button relative z-10 bold hover:text-night font-bold p-1"
		:class="lightBackground ? 'lightBackground' : ''"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:href="url"
		><slot
	/></a>
	<nuxt-link
		v-else
		class="button relative z-10 bold hover:text-night font-bold p-1"
		:class="lightBackground ? 'lightBackground' : ''"
		:style="{ '--themeColor': `var(--color-${themeColor})` }"
		:to="url"
		><slot
	/></nuxt-link>
</template>

<style scoped>
.button::after {
	content: '';
	position: absolute;
	height: 4px;
	width: calc(100% - 0.5rem);
	left: 0.25rem;
	bottom: -0.25rem;
	transition: all 50ms ease;
	transition-property: width height bottom left;
	background-color: var(--themeColor);
	z-index: -10;
}
.button:hover::after {
	width: calc(100% + 0.5rem);
	height: calc(100% + 0.5rem);
	bottom: -0.25rem;
	left: -0.25rem;
	@apply rounded-md;
}

.button.lightBackground::after {
	background-color: var(--color-coal);
	height: 4px;
}
.button.lightBackground:hover::after {
	width: calc(100% + 0.5rem);
	height: calc(100% + 0.5rem);
	bottom: -0.25rem;
	left: -0.25rem;
	background-color: var(--themeColor);
	border: 4px solid var(--color-coal);
}

@media (prefers-color-scheme: light) {
	.button::after {
		background-color: var(--color-coal);
		height: 4px;
	}
	.button:hover::after {
		background-color: var(--themeColor);
		border: 4px solid var(--color-coal);
	}
}
</style>
<script>
export default {
	props: {
		themeColor: { type: String, default: 'rose' },
		url: { type: String, required: true },
		lightBackground: { type: Boolean, default: false },
	},
	setup(props) {
		let isExternal = props.url.startsWith('http') || false
		return {
			isExternal,
		}
	},
}
</script>
