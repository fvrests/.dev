<template>
	<div class="blog-item">
		<NuxtLink
			:to="{
				name: 'blog-slug',
				params: { slug: article.slug },
			}"
		>
			<Subheading
				class="blog-text transition-all duration-300 opacity-90"
			>
				{{ article.title }}
			</Subheading>
			<p
				class="blog-text transition-all duration-300 bold mb-6 opacity-70"
			>
				{{ article.description }}
			</p>
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
