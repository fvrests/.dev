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
        class="flex flex-col lg:flex-row justify-start items-start lg:items-center relative"
      >
        <div
          v-if="image"
          class="backdrop relative max-w-sm mb-8 lg:mb-0 mr-12 mt-8"
          :class="[themeColor, imageSize == 'small' ? 'w-36 sm:w-48' : null]"
        >
          <div
            v-if="numeral !== null"
            class="font-display text-2xl absolute -left-20 opacity-50 tracking-wider"
          >
            {{ numeral < 10 ? '0' + numeral : numeral }}
          </div>
          <img
            :src="require(`~/assets/images/${image}`)"
            class="w-full border-8 max-h-64 object-cover border-night border-solid light:border-coal relative z-20"
            :class="imageSize !== 'small' ? 'lg:-h64' : ''"
          />
        </div>
        <div class="w-full md:w-md mb-20 lg:mb-0 max-w-md">
          <h3 class="text-xl sm:text-3xl font-display mb-4">
            {{ title }}
          </h3>
          <div
            class="mb-8"
            :class="extraLoose ? 'leading-extra-loose' : 'leading-relaxed'"
          >
            <slot />
          </div>
          <div class="space-x-8" v-if="links">
            <template v-for="link in links">
              <a
                v-if="link.isExternal"
                :key="link.url"
                class="link-button"
                :class="themeColor"
                :href="link.url"
                >{{ link.name }}</a
              >
              <nuxt-link
                v-else
                :key="link.url"
                class="link-button"
                :class="themeColor"
                :to="link.url"
                >{{ link.name }}</nuxt-link
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numeral: { type: Number, default: null },
    title: { type: String, default: '' },
    heading: { type: String, default: '' },
    image: { type: String, default: null },
    imageSize: { type: String, default: '' },
    themeColor: { type: String, default: 'rose' },
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
