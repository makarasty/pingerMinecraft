const { request } = require('https')

module.exports.pingerMinecraft = (link, dataToParse = '') => new Promise((resolve, reject) => {
	const options = JSON.stringify(link)
	request({
		hostname: 'minecraftpinger.com', path: '/api/ping', method: 'POST', headers: {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0",
			'Content-Type': 'application/json', 'Content-Length': options.length
		}
	}, function (res) {
		res.on('data', chunk => dataToParse = dataToParse + chunk)
		res.on('end', function () {
			try {
				resolve(JSON.parse(dataToParse))
			} catch (e) { reject('query failed -.-') }
		})
	}).on('error', reject).end(options)
})