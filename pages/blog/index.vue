<template>
	<Section>
		<Heading>
			blog
		</Heading>
		<ul class="space-y-12">
			<li v-for="article of articles" :key="article.slug">
				<NuxtLink
					:to="{ name: 'blog-slug', params: { slug: article.slug } }"
				>
					<div
						class="blog-item transition-all duration-300 flex flex-row space-x-12 rounded-3xl items-center"
					>
						<div class="text-right">
							<p
								class="blog-text text-sm font-bold uppercase opacity-90 transition-all duration-300"
							>
								{{ formatDate(article.createdAt, 'date') }}
							</p>
							<p
								class="blog-text text-xs opacity-70 leading-loose transition-all duration-300"
							>
								{{ formatDate(article.createdAt, 'year') }}
							</p>
						</div>
						<div
							v-if="article.img"
							class="overflow-hidden border-6 border-night light:border-coal rounded-xl w-64 flex-grow-0"
						>
							<img
								:src="`/blog/${article.img}`"
								class="object-cover w-full transform scale-100 transition-all duration-300"
							/>
						</div>
						<div
							v-else
							class="flex items-center justify-center w-64"
						>
							<div
								class="h-0.5 w-36 bg-white blog-text opacity-30 transition-all duration-300"
							/>
						</div>
						<div class="max-w-prose flex-1">
							<h2
								class="blog-text transition-all duration-300 text-3xl font-display mb-2 opacity-90"
							>
								{{ article.title }}
							</h2>

							<p
								class="blog-text transition-all duration-300 text-md bold mb-6 opacity-70"
							>
								{{ article.description }}
							</p>
						</div>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</Section>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply opacity-100;
}
.blog-item:hover img {
	@apply scale-105;
}
</style>

<script>
export default {
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
