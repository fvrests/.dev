<section class="section flex space-between" style="margin-bottom: 36px;">
	<div class="flex flex-col footer-column">
		<div class="heading">Fvrests</div>
		<a class="link" href="/about">About</a>
		<a class="link" href="/projects">Projects</a>
		<a class="link" href="/notes">Notes</a>
	</div>
	<div class="flex flex-col footer-column">
		<div class="heading">Social</div>
		<a class="link" href="https://twitter.com/fvrests">Twitter</a>
		<a class="link" href="https://github.com/fvrests">Github</a>
	</div>
	<div class="flex flex-col footer-column">
		<div class="heading">Site</div>
		<div>Built by fvrests in 2021</div>
		<span
			>with <a class="link" href="https://kit.svelte.dev/">Sveltekit</a>
			& <a class="link" href="https://mdsvex.com/">MDsveX</a>
		</span>
	</div>
</section>

<style>
	.heading {
		font-weight: bold;
	}
	.footer-column > * {
		font-size: 13px;
	}
	.footer-column > *:not(:last-child) {
		margin-bottom: 4px;
	}
	.link {
		font-style: italic;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
