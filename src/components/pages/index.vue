<template>
	<Section class="flex-col h-fill">
		<h1 class="title" style="z-index: 10">From ethereal <br />to real.</h1>
		<div>(or vice versa, for the adventurous)</div>
	</Section>
	<div class="starry-container">
		<Starry class="starry" />
	</div>
	<a v-smooth-scroll href="#about">
		<Arrow class="arrow" />
	</a>
	<Section class="flex-col h-full" id="about">
		<h2 class="heading">Building with code</h2>
		<div>For a better world, with or without it</div>
		<div style="height: var(--space-medium)" />
		<h3 class="label">Projects</h3>
	</Section>
</template>

<style scoped>
.arrow {
	position: absolute;
	left: calc(50vw - 7.5px);
	bottom: 64px;
}
.starry-container {
	position: relative;
	height: calc(100vh - var(--nav-height));
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.starry {
	color: var(--f-med);
	padding: 0px 12px;
	right: 10%;
	bottom: 10%;
	position: absolute;
	opacity: 90%;
}

@media only screen and (max-width: 1600px) {
	.starry {
		width: calc(841.314pt * 0.5);
		height: calc(645.826pt * 0.5);
		bottom: 30%;
	}
}
@media only screen and (max-width: 1200px) {
	.starry {
		opacity: 10%;
	}
}
@media only screen and (max-width: 600px) {
	.starry {
		left: 12px;
	}
}
</style>
<script setup>
import Section from '~/components/section.vue'
import Arrow from '~/components/arrow.vue'
import Starry from '~/components/images/starry.vue'
</script>
