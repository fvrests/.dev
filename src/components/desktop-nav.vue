<template>
	<div style="align-self: right">
		<router-link v-for="link in links" :to="link.url">{{
			link.name
		}}</router-link>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
	links: { Type: Array, required: true },
})
// @media only screen and (max-width: 600px) {
// }
</script>
