<template>
	<div>
		<Section>
			<div class="flex flex-col items-center max-w-prose mx-auto">
				<template v-if="data" class="flex flex-col items-center w-full">
					<div
						v-if="data.icon"
						class="w-16 h-16 border-6 border-border rounded-full overflow-hidden bg-cover bg-no-repeat bg-center mb-4"
						:style="`background-image: url(/${data.slug}/${data.icon});`"
					></div>
					<Heading class="text-center mb-8">
						{{ data.title }}
					</Heading>
					<div
						class="card-text transform transition-all duration-300 -mt-4 mb-8"
					>
						{{ data.content }}
					</div>

					<div
						class="flex flex-row items-center space-x-8 mb-8 sm:mb-12"
						v-if="data.links"
					>
						<div
							class="px-4 py-2 bg-surface rounded-lg flex flex-row items-center space-x-2"
						>
							<div class="text-lemon mb-0.5">
								<svg
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
								>
									<path
										d="M7.948.779a.5.5 0 00-.896 0L5.005 4.926l-4.577.665a.5.5 0 00-.277.853l3.312 3.228-.782 4.559a.5.5 0 00.725.527L7.5 12.605l4.094 2.153a.5.5 0 00.725-.527l-.782-4.56 3.312-3.227a.5.5 0 00-.277-.853l-4.577-.665L7.948.78z"
										fill="currentColor"
									></path>
								</svg>
							</div>
							<div class="font-bold">{{ stargazers }}</div>
						</div>
						<template
							v-for="[key, value] in Object.entries(data.links)"
						>
							<ButtonLink
								:url="value"
								:themeColor="data.themeColor"
								>{{ key }}</ButtonLink
							>
						</template>
						<!-- <template v-for="link in data.links">
							<ButtonLink
								:url="link.url"
								:themeColor="data.themeColor"
								>{{ link.name }}</ButtonLink
							>
						</template> -->
					</div>
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
import fvrests from '../../data/github-fvrests.json'
import rosePine from '../../data/github-rose-pine.json'

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

		const githubSources = {
			fvrests,
			rosePine,
		}
		const githubData = githubSources[data.repo.sourceFile]

		const stargazers = githubData.find(
			(item) => item.name == data.repo.name
		).stargazers_count

		return {
			slug,
			content,
			data,
			prev,
			next,
			fvrests,
			rosePine,
			stargazers,
		}
	},
}
</script>
