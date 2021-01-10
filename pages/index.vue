<template>
  <PageLayout>
    <BaseSection
      title="hi! i'm lynn."
      image="bio@2x.png"
      theme-color="leaf"
      image-size="small"
      extra-loose
      class="mb-20 lg:mb-40"
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
    </BaseSection>
    <BaseHeading>projects </BaseHeading>
    <BaseSection
      v-for="project in Projects"
      v-if="project.highlighted"
      :key="project.title"
      :title="project.title"
      :image="project.image"
      :theme-color="project.themeColor"
      :links="project.links"
      class="py-8"
      limitWidth
    >
      {{ project.content }}</BaseSection
    >
    <BaseSection class="lg:my-12">
      <link-button url="/projects" class="text-xl" theme-color="lemon"
        >more projects →</link-button
      ></BaseSection
    >
  </PageLayout>
</template>

<script>
import BaseSection from '../components/base-section'
import PageLayout from '../components/page-layout'
import BaseHeading from '../components/base-heading'
import Projects from '../data/projects.js'
import LinkButton from '~/components/link-button.vue'

export default {
  components: {
    BaseSection,
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
