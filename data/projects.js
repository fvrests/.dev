const projects = [
	// TODO alt tags
	{
		title: 'lavender',
		slug: 'lavender',
		images: [
			{
				url: 'lavender@2x.png',
				details:
					'Lavender offers a calming & minimal aesthetic for your browser new tab, featuring live-updating time and weather data and clean typography & iconography.',
			},
			{
				url: 'lavender-colors@2x.png',
				details:
					'The theme offers several built-in color theming options, which are cached in Chrome Storage Sync to allow persistence between devices.',
			},
			{
				url: 'lavender-options@2x.png',
				details:
					'Users can choose from standard or metric units, as well as toggle between layouts and choose to refresh the location used to fetch weather.',
			},
		],
		icon: 'lavender-icon.png',
		themeColor: 'lavender',
		type: 'chrome new tab',
		content: 'calming, minimal chrome new tab with live time & weather',
		links: [
			{
				name: 'source code',
				url: 'https://github.com/fvrests/lavender',
			},
			{
				name: 'install for chrome',
				url:
					'https://chrome.google.com/webstore/detail/lavender-new-tab/ffobepdbanoiodmfimpmanafepclokbc',
			},
		],
		highlighted: true,
	},
	{
		title: 'rosé pine',
		slug: 'rose-pine',
		images: [{ url: 'rose-pine@2x.png', details: '' }],
		icon: 'rose-pine-icon.png',
		themeColor: 'rose',
		type: 'theme suite',
		content: 'theme suite with a subdued palette & 30+ community ports',
		links: [
			{
				name: 'source code',
				url: 'https://github.com/rose-pine/rose-pine-theme',
			},
			{
				name: 'install for vscode',
				url:
					'https://marketplace.visualstudio.com/items?itemName=mvllow.rose-pine',
			},
		],
		highlighted: true,
	},
	{
		title: 'wakely',
		slug: 'wakely',
		images: [{ url: 'wakely@2x.png', details: '' }],
		icon: 'wakely-icon.png',
		themeColor: 'lemon',
		type: 'brochure site',
		content: 'promotional site for a conceptual coffee delivery service',
		links: [
			{
				name: 'source code',
				url: 'https://github.com/fvrests/wakely',
			},
			{ name: 'live demo', url: '#' },
		],
		highlighted: false,
	},
	{
		title: 'rosé pine images',
		slug: 'rose-pine-images',
		images: [{ url: 'rose-pine-images.png', details: '' }],
		icon: 'rose-pine-images-icon.png',
		themeColor: 'leaf',
		type: 'image generator',
		content: 'dynamic image generator for rosé pine collaborators',
		links: [
			{
				name: 'source code',
				url: 'https://github.com/fvrests/og-image',
			},
			{
				name: 'try it',
				url: 'https://rose-pine-images.vercel.app',
			},
		],
		highlighted: false,
	},
]

export default projects
