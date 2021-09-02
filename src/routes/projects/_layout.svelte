<script>
	import text from '~/styles/text.module.css';
	export let title;
	export let date;
	export let cover;
	export let tagline;
</script>

<div class="space-lg" />
<section class="section">
	<h3 class={text.heading}>{title}</h3>
	<div style="font-size: 13px;">Project | {date}</div>
	<div class="space-sm" />
	<div class={text.label}>{tagline}</div>
	<div class="space-med" />
	<img src={cover} alt={title} style="border-radius: 6px;" />
	<div class="space-med" />
	<slot />
</section>
