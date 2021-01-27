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
					<BaseText class="leading-loose mb-8"
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
					<LinkList
						themeColor="leaf"
						:links="[{ name: 'get to know me →', url: '/about' }]"
					/>
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
				<ButtonLink url="/projects" class="text-xl" theme-color="lemon"
					>more projects →</ButtonLink
				>
			</div>
		</Section>
		<Section>
			<Heading>blog</Heading>
			<div>
				<div class="blog-item">
					<NuxtLink to="/blog">
						<Subheading
							class="blog-text opacity-90 transition-all duration-300"
						>
							love letter to a monstera
						</Subheading>
						<p
							class="blog-text opacity-70 transition-all duration-300"
						>
							preparing your plants to become even more of plants
						</p>
					</NuxtLink>
				</div>
				<div class="blog-item">
					<NuxtLink to="/blog">
						<Subheading
							class="blog-text opacity-90 transition-all duration-300"
						>
							pockets for you and your friends
						</Subheading>
						<p
							class="blog-text opacity-70 transition-all duration-300"
						>
							having a great day without even putting your snake
							in your backpack
						</p>
					</NuxtLink>
				</div>
				<div class="blog-item">
					<NuxtLink to="/blog">
						<Subheading
							class="blog-text opacity-90 transition-all duration-300"
						>
							quick setup guide
						</Subheading>
						<p
							class="blog-text opacity-70 transition-all duration-300"
						>
							that feeling when your favorite appendage grows a
							new attachment
						</p>
					</NuxtLink>
				</div>
			</div>

			<div class="mb-20 lg:mb-40">
				<ButtonLink url="/blog" class="text-xl" theme-color="leaf"
					>more articles →</ButtonLink
				>
			</div>
		</Section>
		<Section>
			<Heading>contact me</Heading>
			<ButtonLink url="/contact" class="text-lg"> details → </ButtonLink>
		</Section>
	</div>
</template>

<style scoped>
.blog-item {
	@apply mb-8;
}
.blog-item:hover .blog-text {
	@apply opacity-100 text-night dark:text-white;
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
