const projects = [
  // TODO alt tags
  {
    title: 'lavender',
    image: 'lavender@2x.png',
    themeColor: 'lavender',
    content: 'calming, minimal chrome new tab with live time & weather',
    links: [
      {
        name: 'github',
        url: 'https://github.com/fvrests/lavender',
        isExternal: true,
      },
      {
        name: 'install for chrome',
        url:
          'https://chrome.google.com/webstore/detail/lavender-new-tab/ffobepdbanoiodmfimpmanafepclokbc',
        isExternal: true,
      },
    ],
  },
  {
    title: 'rosé pine',
    image: 'rosepine@2x.png',
    themeColor: 'rose',
    content: 'theme suite with a subdued palette & 30+ community ports',
    links: [
      {
        name: 'github',
        url: 'https://github.com/rose-pine/rose-pine-theme',
        isExternal: true,
      },
      {
        name: 'install for vscode',
        url:
          'https://marketplace.visualstudio.com/items?itemName=mvllow.rose-pine',
        isExternal: true,
      },
    ],
  },
  {
    title: 'wakely',
    image: 'wakely@2x.png',
    themeColor: 'lemon',
    content: 'promotional site for a conceptual coffee delivery service',
    links: [
      {
        name: 'github',
        url: 'https://github.com/fvrests/wakely',
        isExternal: true,
      },
      { name: 'live demo', url: '#', isExternal: false },
    ],
  },
  {
    title: 'rosé pine images',
    image: 'rose-pine-images.png',
    themeColor: 'leaf',
    content: 'dynamic image generator for rosé pine collaborators',
    links: [
      {
        name: 'github',
        url: 'https://github.com/rose-pine/og-image',
        isExternal: true,
      },
      {
        name: 'try it',
        url: 'https://rose-pine-images.vercel.app',
        isExternal: true,
      },
    ],
  },
]

export default projects
