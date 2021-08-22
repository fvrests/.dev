<script>
	const toggle = () => {};
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
		font-size: 14px;
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
		background-color: var(--hover);
		border: 1px solid var(--outline);
	}
</style>
