<template>
	<div class="blog-item">
		<NuxtLink
			:to="{
				name: 'blog-slug',
				params: { slug: article.slug },
			}"
		>
			<Subheading
				class="blog-text transition-all duration-300 opacity-80"
			>
				{{ article.title }}
			</Subheading>
			<BaseText class="blog-text transition-all duration-300">
				{{ article.description }}
			</BaseText>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		article: { type: Object, required: true },
	},
}
</script>
<style scoped>
.blog-item {
	@apply mb-8;
}
.blog-item:hover .blog-text {
	@apply opacity-100 text-night dark:text-paper;
}
</style>
