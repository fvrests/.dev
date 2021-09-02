<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/projects/projects.json');
		const { projects } = await res.json();
		return {
			props: { projects }
		};
	}
</script>

<script>
	import text from '~/styles/text.module.css';
	import ProjectList from '~/components/project-list.svelte';
	export let projects;

	console.log('proj', projects);
</script>

<div class="space-lg" />
<section class="section">
	<h3 class={text.heading}>Projects</h3>
	<div class="space-sm" />
	<ProjectList {projects} />
</section>
