<template>
  <PageLayout>
    <BaseSection
      title="hi! i'm lynn."
      image="bio@2x.png"
      theme-color="rose"
      image-size="small"
      extra-loose
      class="my-24 lg:my-48"
      :links="[{ name: 'get to know me →', url: '/about', isExternal: false }]"
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
      :key="project.title"
      :title="project.title"
      :image="project.image"
      :theme-color="project.themeColor"
      :links="project.links"
      :numeral="Projects.indexOf(project) + 1"
      class="py-8"
    >
      {{ project.content }}</BaseSection
    >
    <BaseSection class="mt-12">
      <nuxt-link to="/projects" class="link-button text-lg rose"
        >more projects →</nuxt-link
      ></BaseSection
    >
  </PageLayout>
</template>

<script>
import BaseSection from '../components/base-section'
import PageLayout from '../components/page-layout'
import BaseHeading from '../components/base-heading'
import Projects from '../data/projects.js'

export default {
  components: {
    BaseSection,
    PageLayout,
    BaseHeading,
  },
  setup() {
    return {
      Projects,
    }
  },
}
</script>
