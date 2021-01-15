<template>
  <PageLayout>
    <div class="mx-12 lg:mx-36 flex flex-col items-center">
      <div>
        <h2 class="font-display text-4xl sm:text-5xl mb-2 sm:mb-4">
          {{ project.title }}
        </h2>
        <div
          class="card-text font-bold transform transition-all duration-300 mb-8 sm:mb-12"
        >
          {{ project.content }}
        </div>
        <div
          v-if="project.image"
          class="overflow-hidden border-8 -mx-4 border-night light:border-coal rounded-xl w-full max-w-screen-md mb-8 sm:mb-12"
        >
          <img
            :src="require(`~/assets/images/${project.image}`)"
            class="object-cover w-full h-full transform scale-100 transition-all duration-300"
          />
        </div>
        <div class="space-x-8" v-if="project.links">
          <template v-for="link in project.links">
            <LinkButton :url="link.url" :themeColor="project.themeColor">{{
              link.name
            }}</LinkButton>
          </template>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<script>
import Projects from '../../data/projects'
import onMounted from '@nuxtjs/composition-api'
import PageLayout from '../../components/page-layout'
import LinkButton from '../../components/link-button'

export default {
  async asyncData({ params }) {
    const slug = params.slug
    const filteredProject = Projects.find(
      (project) => project.slug === params.slug
    )
    if (filteredProject) {
      return {
        slug: slug,
        project: { ...filteredProject },
      }
    } else {
      redirect('/projects')
    }
  },
  components: {
    PageLayout,
    LinkButton,
  },
}
</script>
