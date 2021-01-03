<template>
  <div class="sm:hidden w-sm">
    <div class="fixed w-screen h-screen top-0 left-0 bg-night z-30" />
    <ul
      class="flex flex-col justify-center items-center font-bold fixed w-screen h-screen top-0 left-0 space-y-10 z-40"
    >
      <li v-for="link in links" :key="link.name">
        <router-link
          :to="link.url"
          :class="link.classes"
          :active-class="link.activeClasses"
          class="p-1 hover:text-night text-xl select-none"
          >{{ link.name }}</router-link
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
