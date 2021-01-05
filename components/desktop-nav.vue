<template>
  <nav class="hidden md:inline-block">
    <ul class="flex font-bold flex-row space-x-6 -mr-1">
      <li v-for="link in links" :key="link.name">
        <nuxt-link
          :to="link.url"
          :class="link.classes"
          :active-class="link.activeClasses"
          class="link p-1 hover:text-night select-none"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@media (prefers-color-scheme: light) {
  .link {
    border: 3px solid transparent;
    margin: 0px -3px;
  }
  .link:hover,
  .link:active {
    border: 3px solid var(--color-coal);
  }
}
</style>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
