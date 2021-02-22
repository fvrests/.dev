const fetch = require('node-fetch')
const fs = require('fs')

module.exports = async function () {
	console.log('Fetching github data...')
	// GitHub API: https://developer.github.com/v3/repos/#get

	fetch('https://api.github.com/users/fvrests/repos').then((res) =>
		fs.writeFileSync(
			'/data/github-fvrests.js',
			JSON.stringify(res, null, 2)
		)
	)
	fetch('https://api.github.com/orgs/rose-pine/repos').then((res) =>
		fs.writeFileSync(
			'/data/github-rose-pine.js',
			JSON.stringify(res, null, 2)
		)
	)
}
