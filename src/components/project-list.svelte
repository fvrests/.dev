<script>
	import text from '~/styles/text.module.css';

	import { metadata as lavender } from '~/routes/projects/lavender.md';
	import { metadata as rosePine } from '~/routes/projects/rose-pine.md';

	let projects = [lavender, rosePine];
</script>

<div class="grid">
	{#each projects as project}
		<a href={project.slug} class="project">
			<div class="preview-container" role="img" aria-label={project.title}>
				<div class="preview" style={`background-image: url(${project.cover}`} />
			</div>
			<h3 class={text.subheading}>{project.title}</h3>
			<p class={text.label}>{project.tagline}</p>
		</a>
	{/each}
</div>

<style>
	.preview-container {
		border-radius: 6px;
		margin-bottom: 18px;
		aspect-ratio: 3 / 2;
		width: 100%;
		height: auto;
		overflow: hidden;

		/* prevent Safari bug causing child to overflow border radius during transition	 */
		transform: translateZ(0);
	}

	.preview {
		background-color: var(--b-high);
		background-position: center;
		background-size: cover;
		transition: var(--transition);
		width: 100%;
		padding-top: 66.66%;
	}

	.project:hover .preview,
	.project:focus .preview {
		transform: scale(1.03);
		transition: var(--transition);
	}
</style>
