<template>
  <nav class="hidden sm:inline-block">
    <ul class="flex font-bold flex-row">
      <!-- <li class="px-6">
        <router-link
          class="nav-link rose"
          active-class="nav-link-active"
          to="/about"
          >about</router-link
        >
      </li>
      <li class="px-6">
        <router-link
          class="nav-link lavender"
          active-class="nav-link-active"
          to="/projects"
          >projects</router-link
        >
      </li>
      <li class="px-6">
        <router-link
          class="nav-link lemon"
          active-class="nav-link-active"
          to="/blog"
          >blog</router-link
        >
      </li>
      <li class="px-6">
        <router-link
          class="nav-link leaf"
          active-class="nav-link-active"
          to="/contact"
          >contact</router-link
        >
      </li> -->
      <li v-for="link in links" :key="link.name" class="px-6">
        <router-link
          :to="link.url"
          :class="link.classes"
          :active-class="link.activeClasses"
          class="p-1 hover:text-night"
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
