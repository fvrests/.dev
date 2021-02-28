const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

/**
 * Write prettier file
 *
 * @param filePath starts from root
 * @param fileContents
 * @param parser parser used by prettier
 *
 */
const writePrettyFile = async (filePath, fileContents, parser = 'json') => {
	try {
		await prettier.resolveConfig(process.cwd()).then((options) => {
			let formattedContents = prettier.format(fileContents, {
				...options,
				parser,
			})

			fs.writeFileSync(
				path.join(process.cwd(), filePath),
				formattedContents
			)
		})
	} catch (error) {
		console.log(error)
	}
}

console.log('Fetching github data...')
// GitHub API: https://developer.github.com/v3/repos/#get

// personal & rose pine org api locations
let apiRefs = [
	{
		name: 'fvrests',
		url: 'https://api.github.com/users/fvrests/repos',
		outputFile: 'data/github-fvrests.json',
	},
	{
		name: 'rose-pine',
		url: 'https://api.github.com/orgs/rose-pine/repos',
		outputFile: 'data/github-rose-pine.json',
	},
]

const fetchData = async (apiRefs) => {
	let data = {}
	for (ref of apiRefs) {
		const response = await fetch(ref.url)
		const body = await response.text()

		writePrettyFile(
			ref.outputFile,
			JSON.parse(JSON.stringify(body, null, 2)),
			'json-stringify'
		)
	}
}

fetchData(apiRefs)

// fetch('https://api.github.com/users/fvrests/repos').then(
// 	(res) => console.log(res)
// 	// fs.writeFileSync(outputFile, JSON.stringify(res, null, 2))
// )
// fetch('https://api.github.com/orgs/rose-pine/repos').then((res) =>
// 	fs.writeFileSync(
// 		'/data/github-rose-pine.js',
// 		JSON.stringify(res, null, 2)
// 	)
// )
