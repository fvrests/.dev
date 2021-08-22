<template>
	<button @click="toggleDarkMode">
		<!-- todo: stop icon from getting cut off- maybe border inside vs. outside -->
		<Sun v-if="isDarkMode" />
		<Moon v-else />
	</button>
</template>

<style scoped>
button {
	cursor: pointer;
	padding: 2px 0px;
	color: var(--f-med);
}
</style>

<script setup>
import { useTheme } from '~/lib/use-theme'
import Moon from '~/components/images/moon.vue'
import Sun from '~/components/images/sun.vue'

const { isDarkMode, toggleDarkMode } = useTheme()
</script>
