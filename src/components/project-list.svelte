<script>
	import text from '~/styles/text.module.css';
</script>

<div><h3 class={text.heading}>Projects</h3></div>
<div class="grid">
	<a href="projects/lavender" class="project">
		<div class="preview-container" role="img" aria-label="lavender app">
			<div
				class="preview"
				style="background-image: url('/lavender/lavender@2x.png')"
			/>
		</div>
		<h3 class={text.subheading}>Lavender</h3>
		<p class={text.label}>Chrome new tab</p>
	</a>
	<a href="projects/rose-pine" class="project">
		<div class="preview-container" role="img" aria-label="rosé pine theme">
			<div
				class="preview"
				style="background-image: url('/rose-pine/rose-pine@2x.png')"
			/>
		</div>
		<h3 class={text.subheading}>Rosé Pine</h3>
		<p class={text.label}>Theme</p>
	</a>
</div>

<style>
	.preview-container {
		border-radius: 6px;
		margin: 18px 0;
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
