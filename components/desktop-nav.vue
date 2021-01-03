<template>
  <nav class="hidden sm:inline-block">
    <ul class="flex font-bold flex-row">
      <li v-for="link in links" :key="link.name" class="px-4">
        <router-link
          :to="link.url"
          :class="link.classes"
          :active-class="link.activeClasses"
          class="p-1 hover:text-night select-none"
          >{{ link.name }}</router-link
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
