<template>
  <div
    class="w-full flex flex-col justify-center items-center mb-96 max-w-screen-4xl"
  >
    <div
      class="flex flex-col lg:flex-row items-between justify-center items-center"
      :class="inverse ? 'lg:flex-row-reverse' : null"
    >
      <div
        v-if="image"
        class="backdrop relative max-w-md mr-6 mt-6"
        :class="[themeColor, `md:w-${imageWidth}`]"
      >
        <img
          :src="require(`~/assets/images/${image}`)"
          class="w-full border-8 border-night border-solid relative z-20"
        />
      </div>
      <div
        class="w-full max-w-md md:min-w-sm"
        :class="inverse ? 'md:mr-24' : 'md:ml-24'"
      >
        <h2 v-if="heading" class="font-display text-3xl md:text-5xl mb-4">
          {{ heading }}
        </h2>
        <h3 class="text-xl md:text-3xl font-display mb-4 capitalize">
          {{ title }}
        </h3>
        <div class="leading-relaxed">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: false, default: '' },
    heading: { type: String, required: false, default: '' },
    image: { type: String, required: false, default: null },
    imageWidth: { type: String, required: false, default: 'screen-sm' },
    themeColor: { type: String, required: false, default: 'rose' },
    inverse: { type: Boolean, required: false, default: false },
  },
}
</script>
<style>
.backdrop::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: -24px;
  right: -24px;
  z-index: 10;
  border: 8px solid var(--color-night);
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
