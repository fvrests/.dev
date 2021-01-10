const projects = [
  // TODO alt tags
  {
    title: 'lavender',
    image: 'lavender@2x.png',
    icon: 'lavender-icon.png',
    themeColor: 'lavender',
    type: 'chrome new tab',
    content: 'calming, minimal chrome new tab with live time & weather',
    links: [
      {
        name: 'github',
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
    image: 'rose-pine@2x.png',
    icon: 'rose-pine-icon.png',
    themeColor: 'rose',
    type: 'theme suite',
    content: 'theme suite with a subdued palette & 30+ community ports',
    links: [
      {
        name: 'github',
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
    image: 'wakely@2x.png',
    icon: 'wakely-icon.png',
    themeColor: 'lemon',
    type: 'brochure site',
    content: 'promotional site for a conceptual coffee delivery service',
    links: [
      {
        name: 'github',
        url: 'https://github.com/fvrests/wakely',
      },
      { name: 'live demo', url: '#' },
    ],
    highlighted: false,
  },
  {
    title: 'rosé pine images',
    image: 'rose-pine-images.png',
    icon: 'rose-pine-images-icon.png',
    themeColor: 'leaf',
    type: 'image generator',
    content: 'dynamic image generator for rosé pine collaborators',
    links: [
      {
        name: 'github',
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
