<script>
	import text from '~/styles/text.module.css';
	import link from '~/styles/link.module.css';
</script>

<div class="space-lg" />
<section class="section">
	<img src="/bio@2x.png" alt="lynn" class="bio" title="🦀 🦁 🦂 😉" />
	<div>
		<h2 class={text.heading}>About the developer</h2>
		<div>
			<p class={text.base}>
				I'm a biology & psychology grad with a day job in public insurance
				services, but I dream of finding a home in tech where I can help keep
				this beautiful space open, inclusive, human-centered & adventurous.
			</p>

			<p class={text.base}>
				I love oat lattes, minimalism, pair programming with my partner <a
					href="twitter.com/mvllow"
					class={link.inline}>@mvllow</a
				>, and exploring personal disciplines. Some of these at the moment
				include sustainability, daily yoga practice, running, vegan ethics, &
				living car-free.
			</p>
		</div>
	</div>
	<p class={text.base}>
		My <a href="twitter.com/fvrests" class={link.inline}>twitter</a> is always
		open to DMs, suggestions & friend requests, & I love
		<a href="mailto:fvrests@icloud.com" class={link.inline}>emails</a> as well 🥰
		Message me about your ideas, what you're working on or anything on your mind!
	</p>
</section>

<style>
	.bio {
		width: 150px;
		border-radius: 4px;
		margin: 0.25em 0 36px 0;
	}
	@media (min-width: 600px) {
		.bio {
			float: left;
			margin-right: calc(8px + 8px + 1.5em);
			margin-bottom: 8px;
		}
	}
</style>
