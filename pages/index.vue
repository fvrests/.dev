<template>
	<div>
		<Section class="mb-36">
			<Responsive>
				<BaseImage
					backdrop
					class="w-36 xl:w-48 mb-8 xl:mb-0"
					url="bio@2x.png"
					themeColor="leaf"
				/>

				<div class="flex-1 max-w-prose">
					<Subheading>hi! i'm lynn.</Subheading>
					<BaseText class="leading-loose mb-12"
						>I’m exploring
						<span class="highlight bg-lemon"
							>front-end development, accessibility, UI & UX</span
						>. &nbsp;The tools I use most include
						<span class="highlight bg-leaf"
							>vue, react, html, css, js, & figma</span
						>. &nbsp;I’m searching for communities where
						<span class="highlight bg-lavender"
							>mutual growth & mentorship</span
						>
						&nbsp;are valued & celebrated. ✨</BaseText
					>
					<TextLink themeColor="leaf" url="/about">
						get to know me →
					</TextLink>
				</div>
			</Responsive>
		</Section>
		<Section class="mb-36">
			<Heading>projects</Heading>
			<div v-for="project in projects" class="project mb-24">
				<Responsive v-if="project.highlighted">
					<BaseImage
						v-if="project.images"
						:url="`${project.slug}/${project.images[0].url}`"
						:themeColor="project.themeColor"
						backdrop
						class="mb-8 xl:mb-0 max-w-lg"
					/>
					<div class="w-full">
						<Subheading>
							{{ project.title }}
						</Subheading>
						<BaseText class="mb-8">
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
			<div>
				<TextLink url="/projects" themeColor="lemon"
					>more projects →</TextLink
				>
			</div>
		</Section>
		<Section class="mb-36">
			<Heading>blog</Heading>
			<BlogLink
				v-for="article of articles"
				:article="article"
				:key="article.slug"
			></BlogLink>
			<div class="mt-24">
				<TextLink url="/blog" themeColor="rose"
					>more articles →</TextLink
				>
			</div>
		</Section>
		<Section class="mb-36">
			<Heading>contact me</Heading>
			<TextLink url="/contact" themeColor="lavender">
				details →
			</TextLink>
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
