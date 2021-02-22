<template>
	<NuxtLink
		:to="{
			name: 'blog-slug',
			params: { slug: article.slug },
		}"
	>
		<div
			class="blog-item text-fg hover:text-fgBright hover:bg-surface p-4 -mx-4 rounded-lg"
		>
			<div class="relative">
				<div
					v-if="dates"
					class="absolute top-2 -left-28 text-right hidden lg:flex flex-row items-center"
				>
					<div>
						<p class="blog-text text-sm font-bold uppercase">
							{{ formatDate(article.createdAt, 'date') }}
						</p>
						<p class="blog-text text-xs opacity-70 leading-loose">
							{{ formatDate(article.createdAt, 'year') }}
						</p>
					</div>
					<div
						class="ml-4 h-10 w-0.5 bg-fgSubtle blog-text opacity-70 transition-all duration-300"
					/>
				</div>
				<Subheading class="mb-2">
					{{ article.title }}
				</Subheading>
				<BaseText>
					{{ article.description }}
				</BaseText>
			</div>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		article: { type: Object, required: true },
		dates: { type: Boolean, default: false },
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
