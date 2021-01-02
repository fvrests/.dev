<template>
  <div
    class="w-full border-solid border-12 border-night light:text-coal text-sm"
  >
    <div class="overscroll overscroll-top" />
    <BaseNav />
    <slot />
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
  components: {
    BaseNav,
  },
}
</script>
