<template>
	<button
		class="w-6 h-6 cursor-pointer bg-contain bg-center z-50"
		@click="
			$colorMode.preference =
				$colorMode.value == 'dark' ? 'light' : 'dark'
		"
		:style="{
			backgroundImage:
				$colorMode.value == 'dark' ? 'url(/moon.svg)' : 'url(/sun.svg)',
		}"
	></button>
</template>
