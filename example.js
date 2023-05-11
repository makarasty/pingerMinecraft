const { pingerMinecraft } = require("./index.js") // require("pingerMinecraft")

async function main() {
	const data = await pingerMinecraft('95.216.62.176:25629')
	console.log(data)

	pingerMinecraft('95.216.62.176:25629').then(data => {
		console.log(data)
	})
}

main()