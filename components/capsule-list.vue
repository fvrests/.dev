<template>
	<div class="flex flex-row flex-wrap items-center my-6">
		<div
			v-for="item in items"
			:key="item"
			class="themed font-bold px-2 py-2 text-night text-sm rounded-full mr-4 my-2 flex-shrink-0"
		>
			<span class="mr-1 p-1 bg-paper rounded-full">{{ item.symbol }}</span
			><span class="p-1">{{ item.text }}</span>
		</div>
	</div>
</template>

<style scoped>
div:nth-child(4n-3).themed {
	background-color: var(--color-rose);
}
div:nth-child(4n-2).themed {
	background-color: var(--color-lavender);
}
div:nth-child(4n-1).themed {
	background-color: var(--color-leaf);
}
div:nth-child(4n).themed {
	background-color: var(--color-lemon);
}
</style>

<script>
export default {
	props: {
		items: { type: Array, required: true },
	},
}
</script>
