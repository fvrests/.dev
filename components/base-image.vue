<template>
	<div class="relative" :class="[themeColor, { backdrop: backdrop }]">
		<img
			:src="`/${url}`"
			class="w-full border-8 border-coal dark:border-night relative z-20 rounded-xl"
		/>
	</div>
</template>

<style scoped>
.backdrop {
	margin-top: 20px;
}
.backdrop::after {
	content: '';
	top: -20px;
	left: -20px;
	@apply absolute w-full h-full border-8 border-solid border-coal dark:border-night rounded-xl z-10;
}
.backdrop.lemon::after {
	@apply bg-lemon;
}
.backdrop.rose::after {
	@apply bg-rose;
}
.backdrop.leaf::after {
	@apply bg-leaf;
}
.backdrop.lavender::after {
	@apply bg-lavender;
}
</style>

<script>
export default {
	props: {
		url: { type: String, required: true },
		themeColor: { type: String, required: 'rose' },
		backdrop: { type: Boolean, default: false },
	},
}
</script>
