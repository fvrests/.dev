const fetch = require('node-fetch')
const fs = require('fs')

module.exports = async function () {
	console.log('Fetching new github data...')

	// GitHub API: https://developer.github.com/v3/repos/#get
	return fetch('https://api.github.com/users/fvrests/repos').then((res) =>
		fs.writeFileSync('/data/github.js', JSON.stringify(res, null, 2))
	)
}
