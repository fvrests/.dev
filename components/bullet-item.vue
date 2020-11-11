<template>
  <li>
    <div class="flex flex-row items-center justify-center font-bold">
      <div
        class="bullet w-2 h-2 bg-transparent border-solid border-2 border-night mr-2"
      />
      <slot />
    </div>
  </li>
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
