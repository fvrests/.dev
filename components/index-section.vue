<template>
  <div
    class="flex flex-col lg:flex-row justify-start items-start lg:items-center relative"
  >
    <div
      v-if="image"
      class="backdrop relative max-w-sm mb-8 lg:mb-0 mr-12 mt-8"
      :class="[themeColor, imageSize == 'small' ? 'w-36 sm:w-48' : null]"
    >
      <img
        :src="`/${image}`"
        class="w-full border-8 max-h-64 object-cover border-coal dark:border-night relative z-20 rounded-xl"
        :class="imageSize !== 'small' ? 'lg:-h64' : ''"
      />
    </div>
    <div class="w-full mb-20 lg:mb-0" :class="limitWidth ? 'max-w-lg' : ''">
      <h3 class="text-2xl sm:text-3xl font-display mb-4">
        {{ title }}
      </h3>
      <div class="mb-8 sm:text-lg">
        <slot />
      </div>
      <div class="space-x-8" v-if="links">
        <template v-for="link in links">
          <LinkButton :url="link.url" :themeColor="themeColor">{{
            link.name
          }}</LinkButton>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    heading: { type: String, default: '' },
    image: { type: String, default: null },
    imageSize: { type: String, default: '' },
    themeColor: { type: String, default: 'rose' },
    links: { type: Array, default: null },
    limitWidth: { type: Boolean, default: false },
  },
}
</script>
<style>
.backdrop::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  border: 8px solid var(--color-coal);
  border-radius: 0.75rem;
  @apply dark:border-night -top-6 -left-6;
}
.backdrop.lemon::after {
  background-color: var(--color-lemon);
}
.backdrop.rose::after {
  background-color: var(--color-rose);
}
.backdrop.leaf::after {
  background-color: var(--color-leaf);
}
.backdrop.lavender::after {
  background-color: var(--color-lavender);
}
</style>
