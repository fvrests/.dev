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

<div class="space-lg" />
<section class="section">
	<h2 class={text.heading}>Notes</h2>

	<div class="space-sm" />
	<a class="flex flex-row post" href="/notes">
		<div>
			<img src="/sample-image.jpg" alt="desk" class="post-image" />
		</div>
		<div>
			<h3 class={text.subheading}>This is the title of a blog post</h3>
			<p class={text.label}>
				Blog post description goes here and may have lots of words in it
			</p>
		</div>
	</a>

	<div class="space-sm" />
	<a class="flex flex-row post" href="/notes">
		<div>
			<img src="/sample-image-2.jpg" alt="desk" class="post-image" />
		</div>
		<div>
			<h3 class={text.subheading}>
				This is the title of a slightly longer blog post
			</h3>
			<p class={text.label}>Blog post description goes here too</p>
		</div>
	</a>

	<div class="space-sm" />
	<a class="flex flex-row post" href="/notes">
		<div>
			<img src="/sample-image-3.jpg" alt="desk" class="post-image" />
		</div>
		<div>
			<h3 class={text.subheading}>Short blog post</h3>
			<p class={text.label}>
				Some description goes here which might be a little longer
			</p>
		</div>
	</a>
</section>

<div class="space-lg" />
<div class="space-lg" />
<section class="section flex">
	<div>fvrests</div>
</section>
<div class="space-sm" />

<style>
	.post {
		border-radius: 8px;
		padding: 18px;
		margin-left: -18px;
		border: 3px solid transparent;
		/* TODO: make this better  */
		transition: all 400ms ease;
	}
	.post:hover {
		background-color: var(--overlay);
		transition: all 400ms ease;
	}
	.post-image {
		/* TODO: put aspect ratio on div around so that vertical images can be cropped */
		aspect-ratio: 2 / 1;
		max-width: 100px;
		border-radius: 4px;
		margin-right: 18px;
		transition: var(--transition);
	}
	.post:hover .post-image {
		transition: var(--transition);
	}
</style>
