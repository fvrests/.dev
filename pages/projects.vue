<template>
  <PageLayout>
    <h2
      class="mx-12 lg:mx-36 mb-6 text-6xl lg:text-8xl font-display text-white light:text-coal"
    >
      projects
    </h2>
    <div class="grid grid-cols-1 xl:gap-8 xl:grid-cols-2 xl:mx-36 text-coal">
      <nuxt-link
        v-for="project in Projects"
        :key="project.title"
        :to="project.links[0].url"
        class="flex flex-col mx-12 lg:mx-36 xl:mx-0 mb-12 xl:mb-0 rounded-xl max-h-screen-sm p-8 hover:border border-8 border-transparent hover:shadow-xl transition-all duration-300"
        :class="`bg-${project.themeColor}`"
      >
        <h3 class="text-3xl lg:text-4xl font-display mb-1 self-end">
          {{ project.title }}
        </h3>
        <div class="self-end font-bold">{{ project.type }}</div>
        <div
          v-if="project.image"
          class="border-8 border-night light:border-coal rounded-xl w-full mx-auto mt-8"
        >
          <img
            :src="require(`~/assets/images/${project.image}`)"
            class="object-cover"
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
