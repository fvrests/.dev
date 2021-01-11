<template>
  <PageLayout>
    <h2
      class="mx-12 lg:mx-36 mb-6 text-6xl lg:text-7xl font-display text-coal dark:text-white"
    >
      projects
    </h2>
    <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-2 lg:mx-36 text-coal">
      <nuxt-link
        v-for="project in Projects"
        :key="project.title"
        :to="project.links[0].url"
        class="card flex flex-col mx-12 lg:mx-0 mb-12 lg:mb-0 rounded-xl max-h-screen-sm p-8 hover:shadow-xl transition duration-300"
        :class="`bg-${project.themeColor}`"
      >
        <h3
          class="card-text text-3xl lg:text-4xl font-display mb-1 transition-all transform scale-100 duration-300"
        >
          {{ project.title }}
        </h3>
        <div
          class="card-text font-bold transition-all transform scale-100 duration-300"
        >
          {{ project.type }}
        </div>
        <div
          v-if="project.image"
          class="overflow-hidden border-8 border-night light:border-coal rounded-xl w-full mx-auto mt-8"
        >
          <img
            :src="require(`~/assets/images/${project.image}`)"
            class="object-cover w-full h-full transform scale-100 transition-all duration-300"
          />
        </div>
      </nuxt-link>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/page-layout'
import BaseSection from '../components/base-section'
import BaseHeading from '../components/base-heading'
import LinkButton from '../components/link-button'
import Projects from '../data/projects.js'
import { ref } from '@nuxtjs/composition-api'
export default {
  props: {
    image: { type: String, default: null },
  },
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

<style scoped>
.card:hover img {
  @apply scale-105;
}
.card:hover .card-text {
  @apply -translate-y-1;
}
</style>
