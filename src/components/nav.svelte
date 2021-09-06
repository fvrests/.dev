<script>
	import link from '~/styles/link.module.css';
	import ThemeToggle from '~/components/theme-toggle.svelte';
	let open = false;
	const toggleMenu = () => {
		open = !open;
		console.log('open', open);
	};
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
				<a class="nav-link" href="/about">about</a>
				<a class="nav-link" href="/projects">projects</a>
				<a class="nav-link" href="/notes">notes</a>
			</div>

			<div>
				<ThemeToggle />
			</div>

			<div class="mobile-items">
				<button
					class="menu-toggle flex flex-col align-center justify-center"
					on:click={() => toggleMenu()}
				>
					<div class="toggle-bar top" />
					<div class="toggle-bar bottom" />
				</button>

				<!-- TODO: finish mobile nav styling -->
				{#if open}
					<div class="mobile-nav">
						<div class="mobile-links flex flex-col align-center justify-center">
							<a
								class="nav-link mobile"
								href="/about"
								on:click={() => toggleMenu()}>about</a
							>

							<a
								class="nav-link mobile"
								href="/projects"
								on:click={() => toggleMenu()}>projects</a
							>

							<a
								class="nav-link mobile"
								href="/notes"
								on:click={() => toggleMenu()}>notes</a
							>
						</div>
					</div>
				{/if}
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
	}

	/* logo */
	.logo {
		height: 36px;
		width: 36px;
		border-radius: 8px;
		border: 2px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: -9px;
		z-index: 20;
	}

	.logo:hover {
		background-color: var(--overlay);
		border: 2px solid var(--border);
	}

	/* spacing */
	.desktop-nav > * {
		margin-right: 36px;
	}

	/* links */
	.nav-link {
		font-size: 14px;
		font-family: var(--display);
		font-weight: bold;
		color: var(--f-med);
		padding: 6px;
		border: 2px solid transparent;
		border-radius: 8px;
	}

	.nav-link:hover {
		color: var(--f-high);
		background-color: var(--overlay);
		border: 2px solid var(--border);
	}

	.nav-link.mobile {
		font-size: 18px;
		padding: 12px;
		border: 4px solid transparent;
		margin: 12px 0;
		border-radius: 12px;
	}

	.nav-link.mobile:hover {
		/* background-color: var(--border); */
		border: 4px solid var(--border);
	}

	/* responsive nav for mobile / desktop */
	.desktop-nav {
		display: none;
	}

	.menu-toggle {
		border: 2px solid transparent;
		border-radius: 8px;
		margin-left: 18px;
		height: 32px;
		width: 32px;
		position: relative;
		z-index: 20;
	}

	.menu-toggle:hover {
		border: 2px solid var(--border);
		background-color: var(--overlay);
	}

	.toggle-bar {
		width: 14px;
		height: 2px;
		border-radius: 1px;
		background-color: var(--f-low);
	}

	.toggle-bar.top {
		margin-bottom: 2px;
	}

	.toggle-bar.bottom {
		margin-top: 2px;
	}

	.mobile-items {
		position: relative;
	}

	.mobile-nav {
		padding: 12px;
		background-color: var(--b-high);
		position: fixed;
		z-index: 10;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
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
