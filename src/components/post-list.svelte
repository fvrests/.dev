<script>
	import Section from '~/components/section.svelte';
	import text from '~/styles/text.module.css';
	// TODO: dynamic list of posts
	let posts = [];
</script>

{#each posts as post}
	<a class="flex flex-row post" href="/notes">
		<div class="post-image-container">
			<div
				aria-role="img"
				alt="desk"
				class="post-image"
				style="background-image: url('/sample-image-3.jpg')"
			/>
		</div>
		<div>
			<h3 class={text.subheading}>Short blog post</h3>
			<p class={text.label}>
				Some description goes here which might be a little longer
			</p>
		</div>
	</a>
{/each}

<div class="space-sm" />

<!-- 	<a class="flex flex-row post" href="/notes"> -->
<!-- 		<div class="post-image-container"> -->
<!-- 			<div -->
<!-- 				aria-role="img" -->
<!-- 				alt="desk" -->
<!-- 				class="post-image" -->
<!-- 				style="background-image: url('/sample-image.jpg')" -->
<!-- 			/> -->
<!-- 		</div> -->
<!-- 		<div> -->
<!-- 			<h3 class={text.subheading}>This is the title of a blog post</h3> -->
<!-- 			<p class={text.label}> -->
<!-- 				Blog post description goes here and may have lots of words in it -->
<!-- 			</p> -->
<!-- 		</div> -->
<!-- 	</a> -->
<!--  -->
<!-- 	<div class="space-sm" /> -->
<!--  -->
<!-- 	<a class="flex flex-row post" href="/notes"> -->
<!-- 		<div class="post-image-container"> -->
<!-- 			<div -->
<!-- 				aria-role="img" -->
<!-- 				alt="desk" -->
<!-- 				class="post-image" -->
<!-- 				style="background-image: url('/sample-image-2.jpg')" -->
<!-- 			/> -->
<!-- 		</div> -->
<!-- 		<div style="max-width: 500px;"> -->
<!-- 			<h3 class={text.subheading}> -->
<!-- 				This is the title of a slightly longer blog post -->
<!-- 			</h3> -->
<!-- 			<p class={text.label}> -->
<!-- 				Blog post description goes here too Blog post description goes here too -->
<!-- 				Blog post description goes here too Blog post description goes here too -->
<!-- 			</p> -->
<!-- 		</div> -->
<!-- 	</a> -->
<!--  -->
<!-- 	<div class="space-sm" /> -->
<!--  -->
<!-- 	<a class="flex flex-row post" href="/notes"> -->
<!-- 		<div class="post-image-container"> -->
<!-- 			<div -->
<!-- 				aria-role="img" -->
<!-- 				alt="desk" -->
<!-- 				class="post-image" -->
<!-- 				style="background-image: url('/sample-image-3.jpg')" -->
<!-- 			/> -->
<!-- 		</div> -->
<!-- 		<div> -->
<!-- 			<h3 class={text.subheading}>Short blog post</h3> -->
<!-- 			<p class={text.label}> -->
<!-- 				Some description goes here which might be a little longer -->
<!-- 			</p> -->
<!-- 		</div> -->

<!-- 	</a> -->
<style>
	.post {
		border-radius: 8px;
		padding: 18px;
		margin-top: -18px;
		margin-left: -18px;
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
		height: auto;
		max-height: 100%;
		max-width: 100px;
		border-radius: 4px;
		margin-right: 18px;
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
