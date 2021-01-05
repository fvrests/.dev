<template>
  <PageLayout>
    <BaseSection>
      <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </BaseSection>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/page-layout'
import BaseSection from '../components/base-section'
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>
