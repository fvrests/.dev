<template>
	<div
		class="w-full border-solid border-12 border-night light:text-coal text-sm h-full min-h-screen overscroll"
	>
		<BaseNav />
		<div class="my-16 lg:my-36">
			<Nuxt />
		</div>
	</div>
</template>

<style>
/* set overscroll color on safari only */
/* todo: doesn't work */
/* .overscroll::after,
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
} */
</style>
