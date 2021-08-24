<script>
	import { theme } from '$lib/store';
	import { fly } from 'svelte/transition';

	let themes = ['dark', 'light', 'system'];
	let themeIcons = ['full_moon', 'sunny', 'last_quarter_moon'];
	let index = themes.indexOf($theme);
	let popup = false;
	let toggleTheme = () => {
		index += 1;
		popup = true;
		setTimeout(() => {
			popup = false;
		}, 2000);
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

{#if popup}
	<div class="popup" transition:fly={{ y: 100, duration: 300 }}>
		theme set to&nbsp;<span class="theme-name">{$theme}</span><i
			class={`popup-icon em-svg em-${themeIcons[index]}`}
			aria-label={`${theme}`}
		/>
	</div>
{/if}

<style>
	.toggle {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		/* TODO: remove margin & collapse nav into menu on small screens */
	}
	.toggle:hover {
		background-color: var(--overlay);
		border: 1px solid var(--outline);
	}
	.popup {
		position: fixed;
		bottom: 36px;
		right: 36px;
		padding: 16px;
		background: var(--overlay);
		border: 2px solid var(--outline);
		border-radius: 8px;
		display: flex;
		align-items: center;
	}
	.theme-name {
		font-weight: bold;
	}
	.popup-icon {
		margin: 0px 8px;
		width: 16px;
		height: 16px;
	}
</style>
