<template>
	<div class="relative" :class="[themeColor, { backdrop: backdrop }]">
		<div
			class="relative w-full h-full border-8 border-border object-cover overflow-hidden rounded-xl z-20"
		>
			<img
				:src="`/${url}`"
				class="w-full h-full transform transition-all duration-300 scale-100 z-20"
				:class="zoomOnHover ? 'hover:scale-105' : ''"
			/>
		</div>
	</div>
</template>

<style scoped>
.backdrop {
	margin-top: 20px;
}
.backdrop::before {
	content: '';
	top: -20px;
	left: -20px;
	@apply absolute w-full h-full border-8 border-border rounded-xl z-10;
}
.backdrop.lemon::before {
	@apply bg-lemon;
}
.backdrop.rose::before {
	@apply bg-rose;
}
.backdrop.leaf::before {
	@apply bg-leaf;
}
.backdrop.lavender::before {
	@apply bg-lavender;
}
</style>

<script>
export default {
	props: {
		url: { type: String, required: true },
		themeColor: { type: String, default: '' },
		backdrop: { type: Boolean, default: false },
		zoomOnHover: { type: Boolean, default: false },
	},
}
</script>
