<template>
	<Section>
		<div class="max-w-prose mx-auto">
			<Heading>
				blog
			</Heading>
			<div class="mt-8">
				<ul>
					<li
						v-for="article of articles"
						:key="article.slug"
						class="blog-item mb-16"
					>
						<NuxtLink
							:to="{
								name: 'blog-slug',
								params: { slug: article.slug },
							}"
						>
							<div class="relative">
								<div
									class="absolute top-2 -left-28 text-right hidden lg:flex flex-row items-center"
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
										class="ml-4 h-10 w-0.5 bg-coal dark:bg-paper blog-text opacity-70 transition-all duration-300"
									/>
								</div>
								<div>
									<Subheading
										class="blog-text transition-all duration-300 opacity-80"
									>
										{{ article.title }}
									</Subheading>

									<BaseText
										class="blog-text transition-all duration-300"
									>
										{{ article.description }}
									</BaseText>
								</div>
							</div>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</Section>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply opacity-100 text-night dark:text-paper;
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
