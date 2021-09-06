<script>
	import link from '~/styles/link.module.css';
	import ThemeToggle from '~/components/theme-toggle.svelte';
</script>

<nav class="nav-container">
	<section class="flex align-center space-between section">
		<a href="." class="logo">
			<i
				class="em em-herb"
				role="presentation"
				aria-label="home"
				style="width: 20px; height: 20px;"
			/></a
		>

		<div class="flex nav-right align-center">
			<div class="desktop-nav">
				<a class={link.nav} href="/about">about</a>
				<a class={link.nav} href="/projects">projects</a>
				<a class={link.nav} href="/notes">notes</a>
			</div>

			<!-- TODO: align link menu to left of menu toggle, animate in -->
			<div class="mobile-nav">
				<div class="mobile-nav-links flex flex-col">
					<a class={link.nav} href="/about">about</a>
					<a class={link.nav} href="/projects">projects</a>
					<a class={link.nav} href="/notes">notes</a>
				</div>
			</div>

			<button class="menu-toggle flex flex-col space-evenly">
				<div class="toggle-bar" />
				<div class="toggle-bar" />
			</button>

			<div>
				<ThemeToggle />
			</div>
		</div>
	</section>
</nav>

<style>
	.nav-container {
		height: 64px;
		width: 100%;
	}

	.section {
		height: 100%;
	}

	.nav-right {
		height: 100%;
		margin-right: -8px;
	}

	.logo {
		height: 36px;
		width: 36px;
		border-radius: 50%;
		border: 2px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: -9px;
	}

	.logo:hover {
		background-color: var(--overlay);
		border: 2px solid var(--border);
	}

	/* responsive nav for mobile / desktop */
	.desktop-nav > * {
		margin-right: 36px;
	}

	.desktop-nav {
		display: none;
	}

	.mobile-nav {
		padding: 12px;
		border: 2px solid var(--border);
		border-radius: 8px;
		background-color: var(--overlay);
	}

	.menu-toggle {
		height: 12px;
		margin-right: 36px;
	}

	.toggle-bar {
		width: 12px;
		height: 2px;
		background-color: var(--f-low);
	}

	@media (min-width: 800px) {
		.desktop-nav {
			display: flex;
		}
		.mobile-nav {
			display: none;
		}
		.menu-toggle {
			display: none;
		}
	}
</style>
