<template>
  <PageLayout>
    <div class="grid grid-rows-2 grid-cols-2 py-8 mx-12 sm:mx-36 max-w-screen">
      <div
        v-for="project in Projects"
        :key="project.title"
        :title="project.title"
        :image="project.image"
        :theme-color="project.themeColor"
        :links="project.links"
      >
        <div
          v-if="project.image"
          class="relative w-full lg:mb-0"
          :class="[project.themeColor]"
        >
          <img
            :src="require(`~/assets/images/${project.image}`)"
            class="w-full border-8 max-h-128 object-cover border-night border-solid light:border-coal relative z-20"
          />
          {{ project.content }}
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/page-layout'
import BaseSection from '../components/base-section'
import Projects from '../data/projects.js'
export default {
  props: {
    image: { type: String, default: null },
    themeColor: { type: String, default: 'rose' },
  },
  components: {
    BaseSection,
    PageLayout,
  },
  setup() {
    return {
      Projects,
    }
  },
}
</script>
