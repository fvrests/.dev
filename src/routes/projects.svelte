<script>
	import text from '~/styles/text.module.css';
</script>

<div class="space-lg" />
<section class="section">
	<div><h3 class={text.heading}>Projects</h3></div>
	<div class="grid">
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
