<script>
	import text from '~/styles/text.module.css';
	export let title;
	export let date;
	export let cover;
</script>

<div class="space-lg" />
<section class="section">
	<h3 class={text.heading}>{title}</h3>
	<div style="font-size: 13px;">Project | {date}</div>
	<div class="space-med" />
	<img src={cover} alt={title} />
	<div class="space-med" />
	<slot />
</section>
