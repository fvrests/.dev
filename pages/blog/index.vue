<template>
	<Section>
		<div class="max-w-prose mx-auto">
			<Heading class="mb-8">
				Blog
			</Heading>
			<div class="mt-8">
				<BlogLink
					v-for="article of articles"
					:article="article"
					:key="article.slug"
					dates
				></BlogLink>
			</div>
		</div>
	</Section>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply opacity-100 text-fg;
}
.blog-item:hover img {
	@apply scale-105;
}
</style>

<script>
import subheading from '~/components/subheading.vue'
export default {
	components: { subheading },
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'createdAt'])
			.sortBy('createdAt', 'desc')
			.fetch()

		return {
			articles,
		}
	},
	methods: {
		formatDate(date, type) {
			const options = {
				year: { year: 'numeric' },
				date: { day: 'numeric', month: 'short' },
			}

			return new Date(date).toLocaleDateString('en', options[type])
		},
	},
	return() {
		formatDate
	},
}
</script>
