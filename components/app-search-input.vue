<template>
	<div>
		<div
			class="mb-2 h-10 border-3 border-fgMuted rounded-md relative inline-flex items-center focus-within:ring ring-red-500"
		>
			<input
				v-model="searchQuery"
				autocomplete="off"
				class="mr-6 px-3 w-full h-full bg-transparent focus:outline-none"
			/>
			<div class="w-6 absolute right-0 flex items-center justify-center">
				<button>x</button>
			</div>
		</div>
		<div class="relative">
			<input
				v-model="searchQuery"
				autocomplete="off"
				class="font-bold text-fg bg-page scale-150 border-3 border-border p-2 rounded-md"
			/>
			<div class="clearSearch absolute right-2 w-24 h-24">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-x"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</div>
		</div>
		<div>
			<ul v-if="articles.length">
				<li v-for="article of articles" :key="article.slug">
					<NuxtLink
						:to="{
							name: 'blog-slug',
							params: { slug: article.slug },
						}"
					>
						{{ article.title }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			articles: [],
		}
	},
	watch: {
		async searchQuery(searchQuery) {
			if (!searchQuery) {
				this.articles = []
				return
			}
			this.articles = await this.$content()
				.limit(6)
				.search(searchQuery)
				.fetch()
		},
	},
}
</script>
