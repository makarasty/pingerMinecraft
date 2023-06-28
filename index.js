const { request } = require('https')
/**
 * @param {URL|string} link Server url
 * @param {Promise|undefined} promise Promice from you promices library
 * @param {JSON|undefined} json Your JSON library
 * @returns JSON object with data about the server url
 */
const pingerMinecraft = (link, promise = Promise, json = JSON) => new promise((resolve, reject) => {
	if (!link) resolve(new Error('The server IP should be passed using the function argument!'))
	this.chunks = ''
	/**
	 * @private
	 */
	const addChunk = (chunk) => this.chunks += chunk
	this.options = json.stringify({ "server": link })
	request({
		hostname: 'www.minecraftpinger.com',
		path: '/api/get-server-status',
		method: 'POST',
		headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0", 'Content-Type': 'text/plain;charset=UTF-8', 'Content-Length': this.options.length }
	}, (resource) => void resource.on('data', addChunk).on('end', () => {
		try { resolve(json.parse(this.chunks)) } catch (error) { reject(new Error('Failed to get a response from the api\n' + link + '\n' + this.chunks)) }
	})).on('error', reject).end(this.options)
})
module.exports = { pingerMinecraft }