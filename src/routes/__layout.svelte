<script>
	import '~/styles/normalize.css';
	import '~/styles/global.css';
	import Nav from '~/components/nav.svelte';
	import Footer from '~/components/footer.svelte';
</script>

<svelte:head>
	<!-- stops flicker in dev mode -- may be unnecessary in production -->
	<script>
		try {
			if (typeof window !== 'undefined') {
				let localTheme = localStorage.getItem('theme') || 'system';

				document.querySelector('html').className = localTheme;
			}
		} catch {}
	</script>
</svelte:head>
<div style="min-height: 100vh;" class="flex flex-col space-between">
	<div>
		<Nav />
		<slot />
	</div>
	<div class="space-lg" />
	<div class="space-lg" />
	<Footer />
</div>
