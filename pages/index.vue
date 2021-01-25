<template>
	<div>
		<Section>
			<IndexSection
				title="hi! i'm lynn."
				image="bio@2x.png"
				theme-color="lemon"
				image-size="small"
				extra-loose
				class="mb-20 lg:mb-40 max-w-screen-sm xl:max-w-screen-lg mx-auto"
				:links="[{ name: 'get to know me →', url: '/about' }]"
			>
				<p>
					i’m exploring
					<span class="highlight bg-lemon"
						>front-end development, accessibility, UI & UX</span
					>. &nbsp;the tools i use most include
					<span class="highlight bg-leaf"
						>vue, react, html, css, js, & figma</span
					>. &nbsp;i’m searching for communities where
					<span class="highlight bg-lavender"
						>mutual growth & mentorship</span
					>
					<link-list
						themeColor="leaf"
						:links="[{ name: 'get to know me →', url: '/about' }]"
					/>
		</Section>
		<Section>
			<Heading>projects</Heading>
			<IndexSection
				v-for="project in projects"
				v-if="project.highlighted"
				:key="project.title"
				:title="project.title"
				:image="`${project.slug}/${project.image}`"
				:theme-color="project.themeColor"
				:links="project.links"
				class="project"
			>
				{{ project.content }}</IndexSection
			>
			<IndexSection class="mb-20 lg:mb-40">
				<ButtonLink url="/projects" class="text-xl" theme-color="lemon"
					>more projects →</ButtonLink
				></IndexSection
			>
		</Section>
		<Section>
			<Heading>blog</Heading>
			<div>
				<div class="blog-item">
					<Subheading>
						love letter to a monstera
					</Subheading>
					<BaseText>
						preparing your plants to become even more of plants
					</BaseText>
				</div>
				<div class="blog-item">
					<Subheading>
						pockets for you and your friends
					</Subheading>
					<BaseText>
						having a great day without even putting your snake in
						your backpack
					</BaseText>
				</div>
				<div class="blog-item">
					<Subheading>
						quick setup guide
					</Subheading>
					<BaseText>
						that feeling when your favorite appendage grows a new
						attachment
					</BaseText>
				</div>
			</div>

			<IndexSection class="mb-20 lg:mb-40">
				<ButtonLink url="/blog" class="text-xl" theme-color="leaf"
					>more articles →</ButtonLink
				></IndexSection
			>
		</Section>
		<Section>
			<Heading>contact me</Heading>
			<ButtonLink url="/contact" class="text-lg"> details → </ButtonLink>
		</Section>
	</div>
</template>

<style scoped>
.blog-item:hover .blog-text {
	@apply -translate-y-1;
}
</style>

<script>
import projects from '../data/projects.js'

export default {
	setup() {
		return {
			projects,
		}
	},
}
</script>
