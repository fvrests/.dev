<template>
	<Section>
		<div class="max-w-prose md:max-w-none mx-auto mb-8">
			<Heading>
				About me
			</Heading>
		</div>

		<div class="sm:space-x-12 flex flex-col sm:flex-row">
			<div class="flex-1">
				<div class="mb-8 max-w-56 sm:max-w-none w-full">
					<img
						src="/portrait.png"
						class="w-full max-w-prose mx-auto border-8 object-cover border-border relative z-20 rounded-xl"
					/>
				</div>
			</div>
			<BaseText class="flex-1 text-fgSubtle">
				I'm a biology and psychology grad migrating to web dev. I love
				oat lattes, building things that are both functional and pastel,
				pair programming with my partner
				<TextLink url="https://twitter.com/mvllow">@mvllow</TextLink>,
				and working on hobbies and disciplines. Some of those at the
				moment include:
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
				/>I'm motivated by a sense of community and love building
				connections, so my
				<TextLink url="https://twitter.com/fvrests/"
					>Twitter DMs</TextLink
				>
				are always open to suggestions, requests & friends 💛
			</BaseText>
		</div>
	</Section>
</template>
