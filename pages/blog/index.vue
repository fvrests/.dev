<template>
	<Section>
		<div class="max-w-prose mx-auto">
			<Heading>
				blog
			</Heading>
			<ul class="space-y-20">
				<li
					v-for="article of articles"
					:key="article.slug"
					class="blog-item"
				>
					<NuxtLink
						:to="{
							name: 'blog-slug',
							params: { slug: article.slug },
						}"
					>
						<div class="relative">
							<div
								class="absolute top-2 -left-28 text-right flex flex-row items-center"
							>
								<div>
									<p
										class="blog-text text-sm font-bold uppercase opacity-90 transition-all duration-300"
									>
										{{
											formatDate(
												article.createdAt,
												'date'
											)
										}}
									</p>
									<p
										class="blog-text text-xs opacity-70 leading-loose transition-all duration-300"
									>
										{{
											formatDate(
												article.createdAt,
												'year'
											)
										}}
									</p>
								</div>
								<div
									class="ml-4 h-10 w-0.5 bg-coal dark:bg-white blog-text opacity-70 transition-all duration-300"
								/>
							</div>
							<div>
								<Subheading
									class="blog-text transition-all duration-300 opacity-90"
								>
									{{ article.title }}
								</Subheading>

								<p
									class="blog-text transition-all duration-300 text-md bold mb-6 opacity-70"
								>
									{{ article.description }}
								</p>
								<!-- <div
									v-if="article.img"
									class="overflow-hidden border-6 border-night light:border-coal rounded-xl w-full max-h-72 flex-grow-0 flex flex-col justify-center"
								>
									<img
										:src="`/blog/${article.img}`"
										class="object-cover w-full transform scale-100 transition-all duration-300"
									/>
								</div> -->
							</div>
						</div>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</Section>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply opacity-100 text-night dark:text-white;
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
