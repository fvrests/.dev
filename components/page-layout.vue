<template>
  <div
    class="w-full border-solid border-12 border-night light:text-coal text-sm h-full min-h-screen"
    :style="`background-color: var(--color-${navBackground})`"
  >
    <div class="overscroll overscroll-top" />
    <BaseNav :style="`color: var(--color-${navForeground})`" />
    <div class="my-16 lg:my-56">
      <slot />
    </div>
    <div class="overscroll overscroll-bottom" />
  </div>
</template>

<style>
.overscroll {
  left: -1rem;
  right: -1rem;
  position: fixed;
  background: var(--color-night);
  height: 20.5rem;
}
.overscroll-top {
  top: -20rem;
}
.overscroll-bottom {
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
