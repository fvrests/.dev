<template>
  <div class="h-screen w-full flex flex-col justify-center space-y-40">
    <div
      class="flex flex-col sm:flex-row items-center justify-center max-w-screen-lg mx-auto space-x-16"
      :class="inverse ? 'sm:flex-row-reverse' : null"
    >
      <div
        class="backdrop relative max-w-full"
        :class="[themeColor, `w-${imageWidth}`]"
      >
        <img
          :src="require(`~/assets/images/${image}`)"
          class="w-full border-8 border-night border-solid relative z-20"
        />
      </div>
      <div class="max-w-lg mr-16">
        <h2
          v-if="heading"
          class="font-display tracking-widest text-xl sm:text-4xl font-bold mb-4"
        >
          {{ heading }}
        </h2>
        <h3 class="text-xl font-bold mb-4">
          {{ title }}
        </h3>
        <div class="leading-loose">
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
