<template>
	<div
		class="blog-item text-fgSubtle hover:text-fg transition-all duration-100 p-4 -mx-4 rounded-lg"
	>
		<NuxtLink
			:to="{
				name: 'blog-slug',
				params: { slug: article.slug },
			}"
		>
			<Subheading class="mb-2">
				{{ article.title }}
			</Subheading>
			<BaseText>
				{{ article.description }}
			</BaseText>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		article: { type: Object, required: true },
	},
}
</script>
