const { fetch } = require('undici')

/**
 * @param {string} link
 * @param {boolean?} bedrock
 */
async function pingerMinecraft(link, bedrock = false) {
	try {
		const api = `https://api.mcsrvstat.us/${bedrock ? 'bedrock/' : ''}3/${link}`;

		const response = await fetch(api)

		return /**@type {import('./index.d.ts').McServerStatus.ServerData}*/(await response.json())
	} catch (error) {
		throw new Error(`Failed to get a response from the server (${link})\n` + error)
	}
}

module.exports = pingerMinecraft