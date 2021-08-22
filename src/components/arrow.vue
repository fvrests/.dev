<template>
	<svg
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width="27"
		height="27"
		class="arrow"
	>
		<path
			d="M14 5l-6.5 7L1 5"
			stroke="currentColor"
			stroke-linecap="square"
		></path>
	</svg>
</template>

<style scoped>
.arrow {
	animation: float 2s infinite;
	animation-timing-function: linear;
	cursor: pointer;
}

@media (prefers-reduced-motion) {
	.arrow {
		animation: none;
	}
}

@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(6px);
	}
	100% {
		transform: translateY(0px);
	}
}
</style>
