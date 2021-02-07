<template>
	<div>
		<Section>
			<Responsive class="mb-20 lg:mb-40">
				<BaseImage
					backdrop
					class="w-48 md:w-56 mb-8 xl:mb-0"
					url="bio@2x.png"
					themeColor="leaf"
				/>

				<div class="flex-1">
					<Subheading>hi! i'm lynn.</Subheading>
					<BaseText class="leading-loose mb-12"
						>i’m exploring
						<span class="highlight bg-lemon"
							>front-end development, accessibility, UI & UX</span
						>. &nbsp;the tools i use most include
						<span class="highlight bg-leaf"
							>vue, react, html, css, js, & figma</span
						>. &nbsp;i’m searching for communities where
						<span class="highlight bg-lavender"
							>mutual growth & mentorship</span
						>
						&nbsp;are valued & celebrated. ✨</BaseText
					>
					<ButtonLink themeColor="leaf" url="/about">
						get to know me →
					</ButtonLink>
				</div>
			</Responsive>
		</Section>
		<Section>
			<Heading>projects</Heading>
			<div v-for="project in projects" class="project mb-16">
				<Responsive v-if="project.highlighted">
					<BaseImage
						v-if="project.images"
						:url="`${project.slug}/${project.images[0].url}`"
						:themeColor="project.themeColor"
						backdrop
						class="mb-8 xl:mb-0 max-w-lg"
					/>
					<div class="w-full mb-20 xl:mb-0">
						<Subheading>
							{{ project.title }}
						</Subheading>
						<BaseText class="mb-8 text-lg opacity-90">
							{{ project.content }}
						</BaseText>
						<LinkList
							v-if="project.links"
							:links="project.links"
							:themeColor="project.themeColor"
						/>
					</div>
				</Responsive>
			</div>
			<div class="mb-20 lg:mb-40">
				<ButtonLink url="/projects" themeColor="lemon" class="text-xl"
					>more projects →</ButtonLink
				>
			</div>
		</Section>
		<Section>
			<Heading>blog</Heading>
			<BlogLink
				v-for="article of articles"
				:article="article"
				:key="article.slug"
			></BlogLink>
			<div class="mt-12 mb-20 lg:mb-40">
				<ButtonLink url="/blog" class="text-xl" themeColor="rose"
					>more articles →</ButtonLink
				>
			</div>
		</Section>
		<Section>
			<Heading>contact me</Heading>
			<ButtonLink url="/contact" class="text-lg" themeColor="lavender">
				details →
			</ButtonLink>
		</Section>
	</div>
</template>

<style scoped></style>

<script>
import projects from '../data/projects.js'

export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'createdAt'])
			.sortBy('createdAt', 'desc')
			.fetch()

		return {
			articles,
		}
	},
	setup() {
		return {
			projects,
		}
	},
}
</script>
