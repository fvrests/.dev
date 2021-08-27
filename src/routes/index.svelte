<script>
	import text from '~/styles/text.module.css';
	import ProjectList from '~/components/project-list.svelte';
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
	<ProjectList />
</section>
