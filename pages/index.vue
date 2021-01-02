<template>
  <PageLayout>
    <BaseSection
      title="hi! i'm lynn."
      image="bio@2x.png"
      theme-color="rose"
      image-size="small"
      extra-loose
      class="my-24 lg:my-48"
    >
      <p>
        i’m exploring
        <span class="highlight bg-lemon"
          >front-end development, accessibility, UI & UX</span
        >. &nbsp;the tools i use most include
        <span class="highlight bg-leaf">vue, react, html, css, js, & figma</span
        >. &nbsp;i’m searching for communities where
        <span class="highlight bg-lavender">mutual growth & mentorship</span>
        &nbsp;are valued & celebrated. ✨ i love learning
        <span class="highlight bg-rose">hobbies & disciplines</span>,&nbsp;
        which you can read more about
        <router-link class="body-link lemon" to="/about">here</router-link>.
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
      class="py-8"
    >
      {{ project.content }}</BaseSection
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
