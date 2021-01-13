<template>
  <PageLayout>
    <h1>{{ this.slug }}</h1>
    <p>Path: {{ $route.path }}</p>
    <p>Title: {{ this.title }}</p>
    <div
      v-if="this.image"
      class="overflow-hidden border-8 border-night light:border-coal rounded-xl w-full mx-auto mt-8"
    >
      <img
        :src="require(`~/assets/images/${this.image}`)"
        class="object-cover w-full h-full transform scale-100 transition-all duration-300"
      />
    </div>
  </PageLayout>
</template>
<script>
import Projects from '../../data/projects'
import onMounted from '@nuxtjs/composition-api'
import PageLayout from '../../components/page-layout'

export default {
  async asyncData({ params }) {
    const slug = params.slug
    const filteredProject = Projects.find(
      (project) => project.slug === params.slug
    )
    if (filteredProject) {
      return {
        slug: slug,
        title: filteredProject.title,
        image: filteredProject.image,
      }
    } else {
      redirect('/projects')
    }
  },
}
</script>
