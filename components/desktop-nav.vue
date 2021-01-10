<template>
  <nav class="hidden md:inline-block">
    <ul class="flex font-bold flex-row space-x-6 -mr-1">
      <li v-for="link in links" :key="link.name">
        <nuxt-link
          :to="link.url"
          class="link p-2 select-none rounded-md hover:text-night hover:border-3 hover:border-night"
          :class="`hover:bg-${link.themeColor}`"
          :active-class="`bg-${link.themeColor} text-night border-3 border-night light:border-coal`"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* .link:hover,
.nuxt-link-active {
  color: var(--color-night);
} */
@media (prefers-color-scheme: light) {
  /* .link {
    border: 3px solid transparent;
    margin: 0px -3px;
  } */
  /* 
  .link:hover, */
  .nuxt-link-exact-active {
    @apply border-opacity-100;
  }
  /* border: 3px solid var(--color-coal); */
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
