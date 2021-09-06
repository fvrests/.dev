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
		padding: 18px;
		margin: -18px -18px 0 -18px;
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
		aspect-ratio: 3 / 2;
		width: 100%;
		max-height: 100%;
		max-width: 150px;
		margin-right: 18px;
		flex-shrink: 0;
	}
	.post-image {
		/* TODO: put aspect ratio on div around so that vertical images can be cropped */
		position: relative;
		background-color: var(--b-high);
		background-position: center;
		background-size: cover;
		transition: var(--transition);
		width: 100%;
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
