<script>
	import link from '~/styles/link.module.css';
</script>

<nav class="desktop-nav">
	<section class="flex align-center justify-between section">
		<div class="h-full flex align-center">
			<a href="." class="logo">🌿</a>
		</div>
		<div class="flex nav-links align-center">
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
	.nav-links {
		height: 100%;
	}
	.nav-links a:not(:last-child) {
		margin-right: 36px;
	}
	.logo {
		font-size: 20px;
	}
</style>
