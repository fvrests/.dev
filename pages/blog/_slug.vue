<template>
	<Section>
		<div class="flex flex-col items-center max-w-prose mx-auto">
			<AppSearchInput class="mb-8 md:mb-0 md:float-right" />
			<div
				v-if="article.img"
				class="overflow-hidden border-8 -mx-4 border-night light:border-coal rounded-xl w-full max-w-screen-md mb-8 sm:mb-12"
			>
				<img
					:src="`/blog/${article.img}`"
					class="object-cover w-full h-full transform scale-100 transition-all duration-300"
				/>
			</div>
			<h2
				class="mb-6 text-4xl lg:text-5xl font-display text-coal dark:text-white"
			>
				{{ article.title }}
			</h2>
			<p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
			<br />
			<p class="font-display text-xl">table of contents</p>
			<br />
			<nav>
				<ul>
					<li v-for="link of article.toc" :key="link.id">
						<NuxtLink
							:to="`#${link.id}`"
							:class="{
								'py-2': link.depth === 2,
								'ml-2 pb-2': link.depth === 3,
							}"
							>{{ link.text }}</NuxtLink
						>
					</li>
				</ul>
			</nav>
			<br />
			<article>
				<nuxt-content :document="article" class="text-lg" />
			</article>
			<prev-next :prev="prev" :next="next" />
		</div>
	</Section>
</template>

<script>
export default {
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
	async asyncData({ $content, params }) {
		const article = await $content(params.slug).fetch()

		const [prev, next] = await $content()
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()

		return { article, prev, next }
	},
}
</script>
