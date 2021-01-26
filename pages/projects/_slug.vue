<template>
	<Section>
		<div class="flex flex-col items-center mx-auto">
			<div
				v-if="project.icon"
				class="w-16 h-16 border-6 border-coal dark:border-night rounded-full overflow-hidden bg-cover bg-no-repeat bg-center mr-8 mb-8"
				:style="`background-image: url(/${project.slug}/${project.icon});`"
			></div>
			<h2
				class="font-display text-4xl sm:text-5xl mb-2 sm:mb-4 text-center"
			>
				{{ project.title }}
			</h2>

			<div
				class="card-text font-bold transform transition-all duration-300 mb-6 sm:mb-8 text-center"
			>
				{{ project.content }}
			</div>
			<div class="space-x-8 mb-12 sm:mb-16" v-if="project.links">
				<template v-for="link in project.links">
					<ButtonLink
						:url="link.url"
						:themeColor="project.themeColor"
						>{{ link.name }}</ButtonLink
					>
				</template>
			</div>
			<template v-for="image in project.images">
				<div
					v-if="project.images"
					class="overflow-hidden border-8 -mx-4 border-night light:border-coal rounded-xl w-full max-w-screen-lg mb-8"
				>
					<img
						:src="`/${project.slug}/${image.url}`"
						class="object-cover w-full h-full transform scale-100 transition-all duration-300"
					/>
				</div>
				<BaseText class="mb-36 max-w-prose mx-auto">
					{{ image.details }}
				</BaseText>
			</template>
		</div>
	</Section>
</template>
<script>
import projects from '../../data/projects.js'

export default {
	async asyncData({ params }) {
		const slug = params.slug
		const filteredProject = projects.find(
			(project) => project.slug === params.slug
		)
		if (filteredProject) {
			return {
				slug: slug,
				project: { ...filteredProject },
			}
		} else {
			redirect('/projects')
		}
	},
}
</script>
