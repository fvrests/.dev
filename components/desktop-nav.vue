<template>
  <nav class="hidden md:inline-block">
    <ul class="flex font-bold flex-row space-x-6 -mr-1">
      <li v-for="link in links" :key="link.name">
        <nuxt-link
          :to="link.url"
          :class="link.classes"
          :active-class="link.activeClasses"
          class="p-1 hover:text-night select-none"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

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
