<template>
	<div>
		<Section class="mb-24">
			<Responsive>
				<div class="flex">
					<nuxt-link to="/about">
						<BaseImage
							backdrop
							class="w-36 lg:w-48 mb-8 lg:mb-0"
							url="bio@2x.png"
							themeColor="leaf"
							zoomOnHover
						/>
					</nuxt-link>
				</div>

				<div class="flex-1 max-w-prose">
					<Subheading class="mb-4"> Hi, I'm lynn.</Subheading>
					<BaseText class="leading-loose mb-8 text-fgSubtle"
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
					<ButtonLink url="/about" themeColor="leaf"
						>Get to know me →</ButtonLink
					>
				</div>
			</Responsive>
		</Section>
		<Section class="mb-24">
			<Heading class="mb-8">Projects</Heading>
			<div
				v-for="project in projects"
				v-if="project.highlighted"
				class="project mb-16"
			>
				<nuxt-link :to="`projects/${project.slug}`" zoomImagesOnHover>
					<Responsive>
						<div class="flex">
							<BaseImage
								v-if="project.images"
								:url="`${project.slug}/${project.images[0].url}`"
								:themeColor="project.themeColor"
								backdrop
								class="mb-8 xl:mb-0 max-w-lg"
							/>
						</div>
						<div class="w-full">
							<div class="flex">
								<Subheading class="mb-4">
									{{ project.title }}
								</Subheading>
							</div>
							<div class="flex">
								<BaseText class="text-fgSubtle">
									{{ project.content }}
								</BaseText>
							</div>
						</div>
					</Responsive>
				</nuxt-link>
			</div>
			<div>
				<ButtonLink url="/projects" class="text-lg" themeColor="lemon"
					>More projects →</ButtonLink
				>
			</div>
		</Section>
		<Section class="mb-24">
			<Heading class="mb-8">Blog</Heading>
			<BlogLink
				v-for="article of articles"
				:article="article"
				:key="article.slug"
			></BlogLink>
			<div class="mt-16">
				<ButtonLink url="/blog" class="text-lg" themeColor="rose"
					>More articles →</ButtonLink
				>
			</div>
		</Section>
		<Section class="mb-24">
			<Heading class="mb-8">Contact me</Heading>
			<ButtonLink url="/contact" class="text-lg" themeColor="lavender">
				Details →
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
