<template>
  <a
    v-if="isExternal"
    class="button relative z-10 bold hover:text-night font-bold"
    :style="{ '--themeColor': `var(--color-${themeColor})` }"
    :href="url"
    ><slot
  /></a>
  <nuxt-link
    v-else
    class="button relative z-10 bold hover:text-night font-bold"
    :style="{ '--themeColor': `var(--color-${themeColor})` }"
    :to="url"
    ><slot
  /></nuxt-link>
</template>

<style scoped>
.button {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid transparent;
  border-bottom: 9px solid transparent;
}
.button::after {
  content: '';
  position: absolute;
  height: 4px;
  width: 100%;
  left: 0px;
  bottom: -7px;
  transition: all 50ms ease;
  transition-property: width height bottom left;
  background-color: var(--themeColor);
  z-index: -10;
}
.button:hover::after {
  bottom: -8px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  bottom: -4px;
  left: -4px;
}
@media (prefers-color-scheme: light) {
  .button::after {
    height: 3px;
    background-color: var(--color-coal);
    outline: 3px solid transparent;
  }
  .button:hover::after {
    background-color: var(--themeColor);
    outline: 3px solid var(--color-coal);
  }
}
</style>
<script>
export default {
  props: {
    themeColor: { type: String, default: 'rose' },
    url: { type: String, required: true },
  },
  setup(props) {
    let isExternal = props.url.startsWith('http') || false
    return {
      isExternal,
    }
  },
}
</script>
