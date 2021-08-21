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
	<div class="grid" >
		<a href="projects/lavender">
			<img
				src="/lavender/lavender@2x.png"
				alt="lavender app screenshot"
				style="width: 100%; border-radius: 4px; margin: 16px 0;"
			/>
			<h3 class={text.subheading}>Lavender</h3>
			<p class={text.label}>Chrome new tab</p>
		</a>
		<a href="projects/rose-pine">
			<img
				src="/rose-pine/rose-pine@2x.png"
				alt="rosé pine screenshot"
				style="width: 100%; border-radius: 4px; margin: 16px 0;"
			/>
			<h3 class={text.subheading}>Rosé Pine</h3>
			<p class={text.label}>Theme</p>
		</a>
	</div>
</section>
<style>
.hover {
	background-color: var(--b-low)
}
</style>
