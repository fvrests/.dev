<script>
	import link from '~/styles/link.module.css';

	export let href;
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div let:hovering on:mouseenter={enter} on:mouseleave={leave}>
	<a {href} class={`${link.inline} align-center`} style="display: inline-flex;"
		><i
			class:active={hovering}
			class={`em em-${hovering ? 'open_file_folder' : 'file_folder'} flex`}
			role="presentation"
			aria-label="file folder"
			style="width: 14px; height: 14px;"
		/>
		<span style="width: 8px;" />
		<span><slot /></span></a
	>
</div>
