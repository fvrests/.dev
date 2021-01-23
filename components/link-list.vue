<template>
	<div class="space-x-8">
		<template v-for="link in links">
			<LinkButton :url="link.url" :themeColor="themeColor">{{
				link.name
			}}</LinkButton>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		links: { type: Array, required: true },
		themeColor: { type: String, default: 'rose' },
	},
}
</script>
