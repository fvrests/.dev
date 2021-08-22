<template>
	<nav>
		<!-- todo: center logo -->
		<!-- todo: break menu into hamburger on small screens -->
		<ThemeToggle style="justify-self: left" />
		<Logo class="logo" />

		<!-- <div class="desktop-nav">
			<router-link class="nav-link" to="/work">Work</router-link>
			<router-link class="nav-link" to="/about">About</router-link>
			<router-link class="nav-link" to="/notes">Notes</router-link>
		</div> -->
		<DesktopNav :links="links" />
		<MobileNav :links="links" />
	</nav>
</template>

<script setup>
import ThemeToggle from '~/components/theme-toggle.vue'
import Logo from '~/components/logo.vue'
import DesktopNav from '~/components/desktop-nav.vue'
import MobileNav from '~/components/mobile-nav.vue'

const links = [
	{
		url: '/work',
		name: 'Work',
	},
	{
		url: '/about',
		name: 'About',
	},
	{
		url: '/notes',
		name: 'Notes',
	},
]
</script>

<style scoped>
nav {
	max-width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 200px 1fr;
	grid-template-areas: toggle logo links;
	align-items: center;
	justify-items: center;
	height: var(--nav-height);
}
.nav-link {
	font-size: 14px;
	font-weight: bold;
	padding: 2px 0px;
	border-bottom: 2px solid transparent;
}
.nav-link:hover {
	border-bottom: 2px solid var(--f-low);
}
.nav-link:not(:last-child) {
	margin-right: 36px;
}
.logo {
	color: var(--f-med);
}
</style>
