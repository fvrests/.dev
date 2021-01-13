<template>
  <div class="md:hidden w-sm">
    <div class="fixed w-screen h-screen top-0 left-0 bg-night z-30" />
    <ul
      class="flex flex-col justify-center items-center font-bold fixed w-screen h-screen top-0 left-0 space-y-10 z-40"
    >
      <li v-for="link in links" :key="link.name">
        <nuxt-link
          :to="link.url"
          class="p-1 text-white hover:text-night text-xl select-none rounded-md"
          :class="`hover:bg-${link.themeColor}`"
          :active-class="`bg-${link.themeColor} text-night border-3 border-night light:border-coal`"
          >{{ link.name }}</nuxt-link
        >
      </li>
    </ul>
  </div>
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
