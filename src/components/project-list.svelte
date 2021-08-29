<script>
	import text from '~/styles/text.module.css';
	import { metadata as lavender } from '~/routes/projects/lavender.md';
	import { metadata as rosePine } from '~/routes/projects/rose-pine.md';
	console.log('meta', lavender);
</script>

<div class="grid">
	<a href="projects/lavender" class="project">
		<div class="preview-container" role="img" aria-label={lavender.title}>
			<div class="preview" style={`background-image: url(${lavender.cover}`} />
		</div>
		<h3 class={text.subheading}>{lavender.title}</h3>
		<p class={text.label}>{lavender.tagline}</p>
	</a>
	<a href="projects/rose-pine" class="project">
		<div class="preview-container" role="img" aria-label={rosePine.title}>
			<div class="preview" style={`background-image: url(${rosePine.cover}`} />
		</div>
		<h3 class={text.subheading}>{rosePine.title}</h3>
		<p class={text.label}>{rosePine.tagline}</p>
	</a>
</div>

<style>
	.preview-container {
		border-radius: 6px;
		margin-bottom: 18px;
		aspect-ratio: 3 / 2;
		width: 100%;
		height: auto;
		overflow: hidden;
		/* padding-top: 100%; */

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
