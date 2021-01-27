<template>
	<div>
		<Section v-if="project">
			<nuxt-content :document="project" class="text-lg" />
		</Section>
		<Section v-if="data">
			<div class="flex flex-col items-center mx-auto">
				<div
					v-if="data.icon"
					class="w-16 h-16 border-6 border-coal dark:border-night rounded-full overflow-hidden bg-cover bg-no-repeat bg-center mr-8 mb-8"
					:style="`background-image: url(/${data.slug}/${data.icon});`"
				></div>
				<h2
					class="font-display text-4xl sm:text-5xl mb-2 sm:mb-4 text-center"
				>
					{{ data.title }}
				</h2>

				<div
					class="card-text font-bold transform transition-all duration-300 mb-6 sm:mb-8 text-center"
				>
					{{ data.content }}
				</div>
				<div class="space-x-8 mb-12 sm:mb-16" v-if="data.links">
					<template v-for="link in data.links">
						<ButtonLink
							:url="link.url"
							:themeColor="data.themeColor"
							>{{ link.name }}</ButtonLink
						>
					</template>
				</div>
				<template v-for="image in data.images">
					<div
						v-if="data.images"
						class="overflow-hidden border-8 -mx-4 border-night light:border-coal rounded-xl w-full max-w-screen-lg mb-8"
					>
						<img
							:src="`/${data.slug}/${image.url}`"
							class="object-cover w-full h-full transform scale-100 transition-all duration-300"
						/>
					</div>
					<BaseText class="mb-36 max-w-prose mx-auto">
						{{ image.details }}
					</BaseText>
				</template>
			</div>
		</Section>
	</div>
</template>
<script>
import projects from '../../data/projects.js'

export default {
	async asyncData({ $content, params }) {
		const slug = params.slug
		let data = null
		const project = await $content('projects', params.slug)
			.fetch()
			.catch((err) => {
				return null
			})

		const projectData = projects.find(
			(project) => project.slug === params.slug
		)
		if (projectData) {
			data = { ...projectData }
		}
		return { slug, project, data }
	},
}
// export default {
// 	async asyncData({ $content, params }) {
// 		const article = await $content(`/blog/${params.slug}`).fetch()

// 		const [prev, next] = await $content()
// 			.only(['title', 'slug'])
// 			.sortBy('createdAt', 'asc')
// 			.surround(`/blog/${params.slug}`)
// 			.fetch()

// 		return { article, prev, next }
// 	},
// }
</script>
