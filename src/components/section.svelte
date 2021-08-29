<script>
	import text from '~/styles/text.module.css';
	export let title;
</script>

<section class="section">
	<h3 class={text.heading}>{title}</h3>
	<div class="space-sm" />
	<slot />
</section>
