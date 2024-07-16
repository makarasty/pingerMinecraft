const pingerMinecraft = require("./index.js") // require("pingerminecraft")

async function logMinecraftServerStats() {
	const minecraftServerStats = await pingerMinecraft('95.216.62.176:25565')

	console.info(minecraftServerStats)
}

logMinecraftServerStats()

pingerMinecraft('95.216.62.176:25565')
	.then(data => console.log(data))
	.catch(error => console.error(error))

pingerMinecraft('95.216.62.176:25566', true)
	.then(data => console.log(data))
	.catch(error => console.error(error))

pingerMinecraft('go.nextgrief.pw')
	.then(console.log)
	.catch(console.error)