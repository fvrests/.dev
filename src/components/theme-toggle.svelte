<script>
	import { theme } from '$lib/store';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	let themes = ['dark', 'light', 'system'];
	let themeIcons = ['full_moon', 'sunny', 'last_quarter_moon'];
	let index = themes.indexOf($theme);
	let toast = false;

	let toastProgress = tweened(0, {
		duration: 800
	});

	$: if ($toastProgress >= 1) {
		toastProgress.set(0);
	}
	$: toast = $toastProgress > 0;

	let toggleTheme = () => {
		index += 1;
		toastProgress.set(1);
	};

	$: $theme = themes[index];
	$: if (index > themes.length - 1) index = 0;
</script>

<button class="toggle" on:click={toggleTheme}>
	<i
		class={`em-svg em-${themeIcons[index]}`}
		aria-label={`set ${theme} theme`}
		style="width: 16px; height: 16px;"
	/></button
>

{#if toast}
	<div class="toast" transition:fly={{ y: 100, duration: 600 }}>
		Theme set to&nbsp;<span class="theme-name">{$theme}</span><i
			class={`toast-icon em-svg em-${themeIcons[index]}`}
			aria-label={`${theme}`}
		/>
	</div>
{/if}

<style>
	.toggle {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		border: 2px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		/* TODO: remove margin & collapse nav into menu on small screens */
	}
	.toggle:hover {
		background-color: var(--overlay);
		border: 2px solid var(--border);
	}
	.toast {
		position: fixed;
		bottom: 36px;
		right: 36px;
		padding: 16px;
		background: var(--overlay);
		border: 2px solid var(--border);
		border-radius: 8px;
		display: flex;
		align-items: center;
		z-index: 10;
	}
	.theme-name {
		font-weight: bold;
	}
	.toast-icon {
		margin: 0px 8px;
		width: 16px;
		height: 16px;
	}
</style>
