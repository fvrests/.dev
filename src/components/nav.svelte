<script>
	import link from '~/styles/link.module.css';
	import ThemeToggle from '~/components/theme-toggle.svelte';
</script>

<nav class="desktop-nav">
	<section class="flex align-center justify-between section">
		<a href="." class="logo"> <div class="logo">🌿</div></a>
		<div class="flex nav-right align-center">
			<div>
				<ThemeToggle />
			</div>
			<a class={link.nav} href="about">about</a>
			<a class={link.nav} href="projects">projects</a>
			<a class={link.nav} href="notes">notes</a>
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
		font-size: 20px;
		height: 36px;
		width: 36px;
		border-radius: 50%;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo:hover {
		background-color: var(--hover);
		border: 1px solid var(--outline);
	}
</style>
