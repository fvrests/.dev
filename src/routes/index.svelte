<script context="module">
	export async function load({ fetch }) {
		const projectsRes = await fetch('/projects/projects.json');
		const postsRes = await fetch('/notes/posts.json');
		const { projects } = await projectsRes.json();
		const { posts } = await postsRes.json();
		return {
			props: { projects, posts }
		};
	}
</script>

<script>
	import ProjectList from '~/components/project-list.svelte';
	import PostList from '~/components/post-list.svelte';
	import Section from '~/components/section.svelte';
	import FolderLink from '~/components/folder-link.svelte';
	import text from '~/styles/text.module.css';
	export let projects = [];
	export let posts = [];
</script>

<section class="section">
	<div class="space-lg" />
	<h2 class={text.heading}>Hi, I'm Lynn</h2>
	<p class={text.base}>
		I'm exploring front-end development, accessibility, UI & UX.
	</p>
	<p class={text.base}>
		The tools I use most include Vue, React, HTML, CSS, JS, & Figma.
	</p>
	<p class={text.base}>
		I'm searching for communities where diversity, mutual growth & mentorship
		are valued & celebrated. ˙ᵕ˙
	</p>
</section>

<div class="space-lg" />

<Section title="Projects">
	<ProjectList {projects} />
	<div class="space-med" />
	<FolderLink href="/projects">View all</FolderLink>
</Section>

<div class="space-lg" />

<Section title="Notes">
	<PostList {posts} />
	<FolderLink href="/notes">Read more</FolderLink>
</Section>
