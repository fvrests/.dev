<script>
	import link from '~/styles/link.module.css';
	import ThemeToggle from '~/components/theme-toggle.svelte';
</script>

<nav class="desktop-nav">
	<section class="flex align-center justify-between section">
		<a href="." class="logo">
			<i
				class="em em-herb"
				aria-role="presentation"
				aria-label="home"
				style="width: 20px; height: 20px;"
			/></a
		>

		<div class="flex nav-right align-center">
			<a class={link.nav} href="about">about</a>
			<a class={link.nav} href="projects">projects</a>
			<a class={link.nav} href="notes">notes</a>
			<div>
				<ThemeToggle />
			</div>
		</div>
	</section>
</nav>

<style>
	.desktop-nav {
		height: 64px;
		width: 100%;
	}
	.section {
		height: 100%;
	}
	.nav-right {
		height: 100%;
	}
	.nav-right > *:not(:last-child) {
		margin-right: 36px;
	}
	.logo {
		height: 36px;
		width: 36px;
		border-radius: 50%;
		border: 2px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo:hover {
		background-color: var(--overlay);
		border: 2px solid var(--outline);
	}
</style>
