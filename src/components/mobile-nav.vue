<template>
	<nav>
		<div class="flex-col">
			<div class="bar" />
			<div class="bar" />
		</div>
		<router-link v-for="link in links" :to="link.url">{{
			link.name
		}}</router-link>
	</nav>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
	links: { Type: Array, required: true },
})
</script>

<style scoped>
.bar {
	height: 4px;
	width: 8px;
	background-color: var(--f-med);
}
nav {
	display: hidden;
}
/* todo: make hidden only on large screens */
@media only screen and (max-width: 600px) {
	nav {
		display: flex;
		flex-direction: column;
	}
}
</style>
