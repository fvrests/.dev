<template>
	<Section class="flex-col h-fill">
		<h1 class="heading">Hey, it's lynn.</h1>
		<div style="height: var(--space-medium)" />
		<div>
			<!--todo: portrait here maybe  -->
			<div>
				I'm a biology and psychology grad migrating to web dev. I love oat
				lattes, building functional but pastel things, pair programming with my
				partner <a href="https://twitter.com/mvllow">@mvllow</a>, and working on
				hobbies and disciplines. Some of those at the moment include:
				<div style="height: var(--space-small)" />
				<List
					:items="[
						{
							symbol: '🌱',
							text: 'sustainable & slow living',
						},
						{ symbol: '🧺', text: 'minimalism' },
						{ symbol: '🧘🏼‍♀️', text: 'daily yoga practice' },
						{ symbol: '🐷', text: 'ethical veganism' },
						{ symbol: '🌳', text: 'slacklining' },

						{ symbol: '🚲', text: 'living car-free' },
					]"
				/>
				<div style="height: var(--space-small)" />
				<div>
					I'm motivated by a sense of community and love building connections,
					so my
					<a url="https://twitter.com/fvrests/">Twitter</a>
					is always open to DMs, suggestions, & friend requests 💛 You can also
					<a href="mailto:fvrests@icloud.com">email me</a>
					if you want to keep it retro.
				</div>
			</div>
		</div>
	</Section>
</template>

<style scoped></style>

<script setup>
import Section from '~/components/section.vue'
import List from '~/components/list.vue'
</script>
