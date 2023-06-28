const { pingerMinecraft } = require("./index.js") // require("pingerminecraft")

async function logMinecraftServerStats() {
	const minecraftServerStats = await pingerMinecraft('95.216.62.176:25629')
	console.info(minecraftServerStats)
}

logMinecraftServerStats()

pingerMinecraft('95.216.62.176:25629')
	.then(data => console.log(data))
	.catch(error => console.error(error))

pingerMinecraft('95.216.62.176:25629', Promise, JSON)
	.then(data => console.log(data))
	.catch(error => console.error(error))

pingerMinecraft('95.216.62.176:25629', Promise, JSON)
	.then(console.log)
	.catch(console.error)