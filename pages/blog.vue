<template>
  <PageLayout>
    <p>
      <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </p>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/page-layout'
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>
