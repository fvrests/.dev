<template>
  <div class="w-full flex flex-col max-w-screen">
    <div class="mx-12 sm:mx-36">
      <h2
        v-if="heading"
        class="self-start font-display text-4xl sm:text-5xl mb-16 sm:mb-24"
      >
        {{ heading }}
      </h2>
      <div
        class="flex flex-col lg:flex-row justify-start items-start lg:items-center"
        :class="inverse ? 'lg:flex-row-reverse' : null"
      >
        <div
          v-if="image"
          class="backdrop relative max-w-xs mb-8 lg:mb-0 ml-6 mt-6"
          :class="[themeColor, imageSize == 'small' ? 'w-36 sm:w-48' : null]"
        >
          <img
            :src="require(`~/assets/images/${image}`)"
            class="w-full border-8 border-night border-solid light:border-coal relative z-20"
          />
        </div>
        <div
          class="w-full md:w-md mb-20 lg:mb-0 max-w-md"
          :class="inverse ? 'lg:mr-24' : 'lg:ml-24'"
        >
          <h3 class="text-xl sm:text-3xl font-display mb-4">
            {{ title }}
          </h3>
          <div
            class="mb-8"
            :class="extraLoose ? 'leading-extra-loose' : 'leading-relaxed'"
          >
            <slot />
          </div>
          <div class="space-x-10" v-if="links">
            <a
              v-for="link in links"
              :key="link.url"
              class="link-button"
              :class="themeColor"
              :href="link.url"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
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
    inverse: { type: Boolean, default: false },
    extraLoose: { type: Boolean, default: false },
    links: { type: Array, default: null },
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
  border: 8px solid var(--color-night);
  @apply light:border-coal -top-6 -left-6;
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
