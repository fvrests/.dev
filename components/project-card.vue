<template>
	<nuxt-link
		:key="project.title"
		:to="`projects/${project.slug}`"
		class="card flex flex-col mb-12 lg:mb-0 rounded-xl max-h-screen-sm p-6 hover:shadow-xl transition duration-300 text-coal"
		:class="`bg-${project.themeColor}`"
	>
		<h3
			class="card-text text-3xl lg:text-4xl font-display mb-1 transform transition-all duration-300"
		>
			{{ project.title }}
		</h3>
		<div class="card-text font-bold transform transition-all duration-300">
			{{ project.type }}
		</div>
		<div
			v-if="project.image"
			class="overflow-hidden border-8 border-night light:border-coal rounded-xl w-full mx-auto mt-8"
		>
			<img
				:src="`/${project.slug}/${project.image}`"
				class="object-cover w-full h-full transform scale-100 transition-all duration-300"
			/>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		project: { type: Object, required: true },
	},
}
</script>

<style scoped>
.card:hover img {
	@apply scale-105;
}
.card:hover .card-text {
	@apply -translate-y-1;
}
</style>
