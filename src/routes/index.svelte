<script>
	import text from '~/styles/text.module.css';
</script>

<div class="space-lg" />
<section class="section">
	<div class="grid">
		<div>
			<h2 class={text.heading}>Hi, I'm Lynn</h2>
			<p class={text.base}>
				I'm exploring front-end development, accessibility, UI & UX.
			</p>
			<p class={text.base}>
				The tools I use most include Vue, React, HTML, CSS, JS, & Figma.
			</p>
			<p class={text.base}>
				I'm searching for communities where diversity, mutual growth &
				mentorship are valued & celebrated. ˙ᵕ˙
			</p>
		</div>
	</div>
</section>

<div class="space-lg" />
<section class="section">
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
</section>

<style>
	.preview-container {
		border-radius: 6px;
		margin: 16px 0;
		aspect-ratio: 3 / 2;
		width: 100%;
		height: 100%;
		overflow: hidden;

		/* prevent Safari bug causing child to overflow border radius during transition	 */
		transform: translateZ(0);
	}

	.preview {
		background-color: var(--b-high);
		background-position: center;
		background-size: cover;
		transition: transform 400ms ease;
		width: 100%;
		height: 100%;
	}

	.project:hover .preview,
	.project:focus .preview {
		transform: scale(1.05);
		transition: transform 400ms ease;
	}
</style>
