const projects = [
	// TODO alt tags
	{
		title: 'Lavender',
		slug: 'lavender',
		images: [
			{
				url: 'lavender@2x.png',
			},
			{
				url: 'lavender-colors@2x.png',
			},
			{
				url: 'lavender-options@2x.png',
			},
		],
		icon: 'lavender-icon.png',
		themeColor: 'lavender',
		type: 'Chrome new tab',
		content: 'Calming, minimal Chrome new tab with live time & weather',
		links: [
			{
				name: 'Source code',
				url: 'https://github.com/fvrests/lavender',
			},
			{
				name: 'Install for Chrome',
				url:
					'https://chrome.google.com/webstore/detail/lavender-new-tab/ffobepdbanoiodmfimpmanafepclokbc',
			},
		],
		highlighted: true,
	},
	{
		title: 'Rosé Pine',
		slug: 'rose-pine',
		images: [{ url: 'rose-pine-template@2x.png', details: '' }],
		icon: 'rose-pine-icon.png',
		themeColor: 'rose',
		type: 'Theme suite',
		content: 'Theme suite with a subdued palette & 30+ community ports',
		links: [
			{
				name: 'Source code',
				url: 'https://github.com/rose-pine/rose-pine-theme',
			},
			{
				name: 'Install for VSCode',
				url:
					'https://marketplace.visualstudio.com/items?itemName=mvllow.rose-pine',
			},
		],
		highlighted: true,
	},
	{
		title: 'Rosé Pine Images',
		slug: 'rose-pine-images',
		images: [{ url: 'rose-pine-images.png' }],
		icon: 'rose-pine-images-icon.png',
		themeColor: 'leaf',
		type: 'Image generator',
		content: 'Dynamic image generator for Rosé Pine collaborators',
		links: [
			{
				name: 'Source code',
				url: 'https://github.com/fvrests/og-image',
			},
			{
				name: 'Try it',
				url: 'https://rose-pine-images.vercel.app',
			},
		],
		highlighted: false,
	},
	{
		title: 'Wakely',
		slug: 'Wakely',
		images: [{ url: 'wakely@2x.png', details: '' }],
		icon: 'wakely-icon.png',
		themeColor: 'lemon',
		type: 'Brochure site',
		content: 'Promotional site for a conceptual coffee delivery service',
		links: [
			{
				name: 'Source code',
				url: 'https://github.com/fvrests/wakely',
			},
			{ name: 'Live demo', url: '#' },
		],
		highlighted: false,
	},
]

export default projects
