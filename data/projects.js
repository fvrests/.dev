const projects = [
	// TODO: alt tags
	{
		title: 'Lavender',
		slug: 'lavender',
		repo: {
			sourceFile: 'fvrests',
			name: 'lavender',
			url: 'https://github.com/fvrests/lavender',
		},
		images: [
			{
				url: 'lavender@2x.png',
			},
		],
		icon: 'lavender-icon.png',
		themeColor: 'lavender',
		type: 'Chrome new tab',
		content: 'Calming, minimal Chrome new tab with live time & weather',
		links: {
			'Source code': 'https://github.com/fvrests/lavender',
			'Install for Chrome':
				'https://chrome.google.com/webstore/detail/lavender-new-tab/ffobepdbanoiodmfimpmanafepclokbc',
		},
		highlighted: true,
	},
	{
		title: 'Rosé Pine',
		slug: 'rose-pine',
		repo: {
			sourceFile: 'rosePine',
			name: 'rose-pine-theme',
			url: 'https://github.com/rose-pine/rose-pine-theme',
		},
		images: [{ url: 'rose-pine-template@2x.png', details: '' }],
		icon: 'rose-pine-icon.png',
		themeColor: 'rose',
		type: 'Theme suite',
		content: 'Theme suite with a subdued palette & 30+ community ports',
		links: {
			'Source code': 'https://github.com/rose-pine/rose-pine-theme',
			'Install for VSCode':
				'https://marketplace.visualstudio.com/items?itemName=mvllow.rose-pine',
		},
		highlighted: true,
	},
	{
		title: 'Rosé Pine Images',
		slug: 'rose-pine-images',
		repo: {
			sourceFile: 'fvrests',
			name: 'rose-pine-images',
			url: 'https://github.com/fvrests/rose-pine-images',
		},
		images: [{ url: 'rose-pine-images.png' }],
		icon: 'rose-pine-images-icon.png',
		themeColor: 'leaf',
		type: 'Image generator',
		content: 'Dynamic image generator for Rosé Pine collaborators',
		links: {
			'Source code': 'https://github.com/fvrests/og-image',
			'Live demo': 'https://rose-pine-images.vercel.app',
		},
		highlighted: false,
	},
	{
		title: 'Wakely',
		slug: 'Wakely',
		repo: { sourceFile: 'fvrests', name: 'wakely' },
		images: [{ url: 'wakely@2x.png', details: '' }],
		icon: 'wakely-icon.png',
		themeColor: 'lemon',
		type: 'Brochure site',
		content: 'Promotional site for a conceptual coffee delivery service',
		links: {
			'Source code': 'https://github.com/fvrests/wakely',
			'Live demo': '#',
		},
		highlighted: false,
	},
]

export default projects
