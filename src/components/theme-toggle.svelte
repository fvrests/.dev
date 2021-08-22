<script>
	const toggle = () => {
		if (localStorage.getItem('dark') == '1') {
			localStorage.setItem('dark', '0');
		} else {
			localStorage.setItem('dark', '1');
		}
		window.document.querySelector('html').classList.toggle('dark');
	};
</script>

<button class="toggle" on:click={() => toggle()}
	><div>
		{#if true}
			🌙
		{:else}
			🌞
		{/if}
	</div></button
>

<style>
	.toggle {
		font-size: 20px;
		height: 36px;
		width: 36px;
		border-radius: 50%;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		/* TODO: remove margin & collapse nav into menu on small screens */
	}
	.toggle:hover {
		background-color: var(--hover);
		border: 1px solid var(--outline);
	}
</style>
