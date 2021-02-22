<template>
	<div>
		<Section>
			<div class="flex flex-col items-center max-w-prose mx-auto">
				<template v-if="data">
					<div
						v-if="data.icon"
						class="w-16 h-16 border-4 border-border rounded-full overflow-hidden bg-cover bg-no-repeat bg-center mr-8 mb-8"
						:style="`background-image: url(/${data.slug}/${data.icon});`"
					></div>
					<Heading class="text-center mb-8">
						{{ data.title }}
					</Heading>
					<div
						class="card-text font-bold transform transition-all duration-300 -mt-4 mb-8 text-center"
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

					<!-- todo: github stars, users, featured etc -->

					<div
						v-if="data.images"
						class="overflow-hidden border-8 -mx-4 border-border rounded-xl w-full max-w-screen-lg mb-8"
					>
						<img
							:src="`/${data.slug}/${data.images[0].url}`"
							class="object-cover w-full h-full transform scale-100 transition-all duration-300"
						/>
					</div>
				</template>
				<div v-if="content" class="w-full prose">
					<nuxt-content :document="content" />
				</div>
				<PrevNext :prev="prev" :next="next" />
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
		const content = await $content('projects', params.slug)
			.fetch()
			.catch((err) => {
				return null
			})

		const projectData = projects.find(
			(content) => content.slug === params.slug
		)
		if (projectData) {
			data = { ...projectData }
		}
		const [prev, next] = await $content('projects')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround('projects', params.slug)
			.fetch()

		return { slug, content, data, prev, next }
	},
}
</script>
