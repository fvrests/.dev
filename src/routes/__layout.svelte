<script>
	import '~/styles/normalize.css';
	import '~/styles/global.css';
	import Nav from '~/components/nav.svelte';

</script>

<svelte:head>
	<!-- stops flicker in dev mode -- may be unnecessary in production -->
	<script>
try{ 
	if (typeof window !== 'undefined') {
let localTheme = localStorage.getItem('theme') || 'system'

	document.querySelector('html').className = localTheme
	}
	} catch {}</script>
</svelte:head>

<Nav />
<slot />

<style></style>
