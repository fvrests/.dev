<template>
  <PageLayout>
    <IndexSection
      title="hi! i'm lynn."
      image="bio@2x.png"
      theme-color="lemon"
      image-size="small"
      extra-loose
      class="mb-20 lg:mb-40 px-12 max-w-screen-lg mx-auto"
      :links="[{ name: 'get to know me →', url: '/about' }]"
      limitWidth
    >
      <p>
        i’m exploring
        <span class="highlight bg-lemon"
          >front-end development, accessibility, UI & UX</span
        >. &nbsp;the tools i use most include
        <span class="highlight bg-leaf">vue, react, html, css, js, & figma</span
        >. &nbsp;i’m searching for communities where
        <span class="highlight bg-lavender">mutual growth & mentorship</span>
        &nbsp;are valued & celebrated. ✨
      </p>
    </IndexSection>
    <div class="px-12 max-w-screen-lg mx-auto">
      <BaseHeading>projects</BaseHeading>
      <IndexSection
        v-for="project in Projects"
        v-if="project.highlighted"
        :key="project.title"
        :title="project.title"
        :image="`${project.slug}/${project.image}`"
        :theme-color="project.themeColor"
        :links="project.links"
        class="project py-8"
        limitWidth
      >
        {{ project.content }}</IndexSection
      >
      <IndexSection class="mb-20 lg:mb-40">
        <link-button url="/projects" class="text-xl" theme-color="lemon"
          >more projects →</link-button
        ></IndexSection
      >
    </div>
    <div class="px-12 max-w-screen-lg mx-auto">
      <BaseHeading>blog</BaseHeading>
      <div class="py-8">
        <div class="blog-item">
          <div
            class="blog-text transform transition-all duration-300 text-3xl font-display mb-2"
          >
            love letter to a monstera
          </div>
          <div
            class="blog-text transform transition-all duration-300 text-md bold mb-6"
          >
            preparing your plants to become even more of plants
          </div>
        </div>
        <div class="blog-item">
          <div
            class="blog-text transform transition-all duration-300 text-3xl font-display mb-2"
          >
            pockets for you and your friends
          </div>
          <div
            class="blog-text transform transition-all duration-300 text-md bold mb-6"
          >
            having a great day without even putting your snake in your backpack
          </div>
        </div>
        <div class="blog-item">
          <div
            class="blog-text transform transition-all duration-300 text-3xl font-display mb-2"
          >
            quick setup guide
          </div>
          <div
            class="blog-text transform transition-all duration-300 text-md bold mb-6"
          >
            that feeling when your favorite appendage grows a new attachment
          </div>
        </div>
      </div>
      <IndexSection class="mb-20 lg:mb-40">
        <link-button url="/blog" class="text-xl" theme-color="leaf"
          >more articles →</link-button
        ></IndexSection
      >
    </div>
    <div class="px-12 max-w-screen-lg mx-auto">
      <BaseHeading>contact me</BaseHeading>
      <LinkButton url="/contact" class="text-lg">
        fvrests@icloud.com
      </LinkButton>
    </div>
  </PageLayout>
</template>
<style scoped>
.blog-item:hover .blog-text {
  @apply -translate-y-1;
}
</style>

<script>
import IndexSection from '../components/index-section'
import PageLayout from '../components/page-layout'
import BaseHeading from '../components/base-heading'
import Projects from '../data/projects.js'
import LinkButton from '~/components/link-button.vue'
export default {
  components: {
    IndexSection,
    PageLayout,
    BaseHeading,
    LinkButton,
  },
  setup() {
    return {
      Projects,
    }
  },
}
</script>
