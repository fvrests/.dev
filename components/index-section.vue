<template>
	<div
		class="flex flex-col xl:flex-row justify-start items-start xl:items-center relative"
	>
		<BaseImage
			v-if="image"
			:url="image"
			:themeColor="themeColor"
			backdrop
			class="mb-8 xl:mb-0 xl:mr-12 max-w-lg"
		/>

		<div class="w-full mb-20 xl:mb-0">
			<Subheading>
				{{ title }}
			</Subheading>
			<BaseText class="mb-8 text-lg opacity-90">
				<slot />
			</BaseText>
			<LinkList v-if="links" :links="links" :themeColor="themeColor" />
		</div>
	</div>
</template>

<script setup>
export default {
	props: {
		title: { type: String, default: '' },
		heading: { type: String, default: '' },
		image: { type: String, default: null },
		imageSize: { type: String, default: '' },
		themeColor: { type: String, default: 'rose' },
		links: { type: Array, default: null },
	},
}
</script>
<style>
.backdrop {
	margin-top: 14px;
}
.backdrop::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 10;
	border: 8px solid var(--color-coal);
	border-radius: 0.75rem;
	@apply dark:border-night -top-6 -left-6;
}
.backdrop.lemon::after {
	background-color: var(--color-lemon);
}
.backdrop.rose::after {
	background-color: var(--color-rose);
}
.backdrop.leaf::after {
	background-color: var(--color-leaf);
}
.backdrop.lavender::after {
	background-color: var(--color-lavender);
}
</style>
