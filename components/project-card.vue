<template>
	<nuxt-link
		:key="project.title"
		:to="`projects/${project.slug}`"
		class="card flex flex-col mb-12 lg:mb-0 rounded-xl max-h-screen-sm p-4 hover:shadow-xl transition duration-300 zoomImagesOnHover"
		:class="`bg-${project.themeColor}`"
	>
		<Subheading
			class="mb-4 card-text transform transition-all duration-300 dark:text-page"
		>
			{{ project.title }}
		</Subheading>
		<div
			class="card-text text-sm transform transition-all duration-300 -mt-3 dark:text-page"
		>
			{{ project.type }}
		</div>
		<BaseImage
			v-if="project.images"
			:url="`${project.slug}/${project.images[0].url}`"
			class="mx-auto mt-4"
		/>
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
.card:hover .card-text {
	@apply -translate-y-1;
}
</style>
