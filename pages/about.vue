<template>
	<Section>
		<div class="max-w-prose xl:max-w-none mx-auto">
			<Heading>
				about me
			</Heading>
		</div>

		<Responsive>
			<div class="mb-8 xl:mb-0">
				<img
					src="/portrait.png"
					class="w-full max-w-prose mx-auto xl:max-w-sm border-8 object-cover border-coal dark:border-night relative z-20 rounded-xl"
				/>
			</div>
			<div class="max-w-prose mx-auto">
				<BaseText>
					I'm a biology and psychology grad in migration to tech due
					to a discovered passion for development & design. I love oat
					lattes, building functional things that happen to be pastel,
					pair programming with my partner
					<TextLink url="https://twitter.com/mvllow">@mvllow</TextLink
					>, and working on hobbies and disciplines. Some of those at
					the moment include:
					<CapsuleList
						:items="[
							{ symbol: '🧺', text: 'minimalism' },
							{ symbol: '🧘🏼‍♀️', text: 'daily yoga practice' },
							{ symbol: '🐷', text: 'ethical veganism' },
							{
								symbol: '🌱',
								text: 'sustainable & slow living',
							},
							{ symbol: '🚲', text: 'living car-free' },
							{ symbol: '🌳', text: 'slacklining' },
						]"
					/>
					I'm motivated by a sense of community and love building
					connections, so my
					<TextLink url="https://twitter.com/fvrests/"
						>Twitter DMs</TextLink
					>
					are always open to suggestions, requests & friends 💛
				</BaseText>
			</div>
		</Responsive>
	</Section>
</template>
