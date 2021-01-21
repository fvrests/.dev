<template>
  <ul class="py-8 leading-loose md:grid gap-y-1 grid-cols-2">
    <li
      v-for="item in items"
      :key="item"
      class="flex flex-row items-center font-bold"
    >
      <div
        class="bullet w-2 h-2 bg-transparent border-solid border-2 border-night mr-4"
      />
      <div>{{ item }}</div>
    </li>
  </ul>
</template>

<style scoped>
li:nth-child(4n-3) .bullet {
  background-color: var(--color-rose);
}
li:nth-child(4n-2) .bullet {
  background-color: var(--color-lavender);
}
li:nth-child(4n-1) .bullet {
  background-color: var(--color-leaf);
}
li:nth-child(4n) .bullet {
  background-color: var(--color-lemon);
}
</style>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
}
</script>
