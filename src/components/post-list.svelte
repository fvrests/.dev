<script>
	import text from '~/styles/text.module.css';
	export let posts;
</script>

{#each posts as post}
	<a class="flex flex-row post" href={`/notes/${post.slug}`}>
		<div class="post-image-container">
			<div
				role="img"
				alt="desk"
				class="post-image"
				style={`background-image: url(/${post.cover})`}
			/>
		</div>
		<div>
			<h3 class={text.subheading}>{post.title}</h3>
			<p class={text.label}>
				{post.tagline}
			</p>
		</div>
	</a>
	<div class="space-med" />
{/each}

<style>
	.post {
		border-radius: 8px;
		padding: 12px;
		margin: -12px -12px 0 -12px;
		border: 3px solid transparent;
		/* TODO: make this better  */
		transition: all 400ms ease;
	}
	.post:hover {
		background-color: var(--overlay);
		transition: all 400ms ease;
	}
	.post-image-container {
		border-radius: 4px;
		overflow: hidden;
		height: 100%;
		width: 100%;
		max-width: 100px;
		margin-right: 18px;
		flex-shrink: 0;
	}
	.post-image {
		position: relative;
		background-color: var(--b-high);
		background-position: center;
		background-size: cover;
		padding-top: 66.66%;
	}
	.post-image:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom, transparent, black);
		opacity: 0.05;
	}
</style>
