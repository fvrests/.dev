<template>
	<Section>
		<h2
			class="mb-12 text-6xl lg:text-7xl font-display text-coal dark:text-white"
		>
			projects
		</h2>
		<div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-2">
			<ProjectCard
				v-for="project in projects"
				:key="project.name"
				:project="project"
			/>
		</div>
	</Section>
</template>

<script>
import projects from '../../data/projects.js'

export default {
	props: {
		image: { type: String, default: null },
	},

	setup() {
		return {
			projects,
		}
	},
}
</script>
