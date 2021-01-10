<template>
  <div
    class="w-full border-solid border-12 border-night light:text-coal text-sm h-full min-h-screen overscroll"
    :style="`background-color: var(--color-${navBackground})`"
  >
    <BaseNav :style="`color: var(--color-${navForeground})`" />
    <div class="my-16 lg:my-36">
      <slot />
    </div>
  </div>
</template>

<style>
.overscroll::after,
.overscroll::before {
  left: -1rem;
  right: -1rem;
  position: absolute;
  background: var(--color-night);
  height: 20.5rem;
}
.overscroll::before {
  top: -20rem;
}
.overscroll::after {
  bottom: -20rem;
}
</style>

<script>
import BaseNav from './base-nav'
export default {
  props: {
    navBackground: { type: String, default: 'background' },
    navForeground: { type: String, default: 'foreground' },
  },
  components: {
    BaseNav,
  },
}
</script>
