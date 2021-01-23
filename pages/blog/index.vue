<template>
	<Section>
		<h2
			class="mb-12 text-6xl lg:text-7xl font-display text-coal dark:text-white"
		>
			blog
		</h2>
		<br />
		<ul>
			<li v-for="article of articles" :key="article.slug">
				<NuxtLink
					class="blog-item"
					:to="{ name: 'blog-slug', params: { slug: article.slug } }"
				>
					<div>
						<h2
							class="blog-text transform transition-all duration-300 text-3xl font-display mb-2"
						>
							{{ article.title }}
						</h2>
						<p
							class="blog-text transform transition-all duration-300 text-md bold mb-6"
						>
							{{ article.description }}
						</p>
					</div>
				</NuxtLink>
				<br />
			</li>
		</ul>
	</Section>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply -translate-y-1;
}
</style>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content(params.slug)
			.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('createdAt', 'asc')
			.fetch()

		return {
			articles,
		}
	},
}
</script>
