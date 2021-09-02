<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/notes/posts.json');
		const { posts } = await res.json();
		return {
			props: { posts }
		};
	}
</script>

<script>
	import PostList from '~/components/post-list.svelte';
	import text from '~/styles/text.module.css';
	export let posts;
</script>

<div class="space-lg" />
<section class="section">
	<h3 class={text.heading}>Notes</h3>
	<div class="space-sm" />
	<PostList {posts} />
</section>
