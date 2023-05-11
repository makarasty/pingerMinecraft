const { minecraftPinger } = require("./index.js") // require("minecraftpinger")

async function main() {
	const data = await minecraftPinger('95.216.62.176:25629')
	console.log(data)

	minecraftPinger('95.216.62.176:25629').then(data => {
		console.log(data)
	})
}

main()