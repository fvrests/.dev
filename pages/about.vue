<template>
	<Section>
		<div class="max-w-prose md:max-w-none mx-auto mb-8">
			<Heading>
				Hey, it's lynn.
			</Heading>
		</div>

		<div class="md:space-x-6 grid grid-cols-1 md:grid-cols-2 mb-0 md:mb-4">
			<div class="w-full md:h-full mb-8 md:mb-0">
				<img
					src="/portrait.png"
					class="w-full max-w-prose mx-auto border-8 object-cover border-border relative z-20 rounded-xl"
				/>
			</div>
			<BaseText class="text-fgSubtle"
				>I'm a biology and psychology grad migrating to web dev. I love
				oat lattes, building functional but pastel things, pair
				programming with my partner
				<TextLink url="https://twitter.com/mvllow">@mvllow</TextLink>,
				and working on hobbies and disciplines. Some of those at the
				moment include:
				<CapsuleList
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
			</BaseText>
		</div>
		<BaseText class="flex-1 text-fgSubtle">
			I'm motivated by a sense of community and love building connections,
			so my
			<TextLink url="https://twitter.com/fvrests/">Twitter</TextLink>
			is always open to DMs, suggestions, & friend requests 💛 You can
			also
			<TextLink url="mailto:fvrests@icloud.com">email me</TextLink> if you
			want to keep it retro.
		</BaseText>
	</Section>
</template>
