# This library uses https://minecraftpinger.com/ !

**Nodejs** lA Nodejs library that allows you to get **information** about the minecart server

# Dependencies
- NodeJs

# Documentation
- **version**
	 - **name**
	 - **protocol**
- **players**
	- **online**
	- **max**
	- **sample**
- **motd**
- **favicon**
- **srvRecord**
- **latency**
- **host**
- **port**

![изображение](https://github.com/makarasty/pingerMinecraft/assets/71918286/1b92467c-a645-4a9b-a88c-bbf17bdbc70c)

# example 1
```js
const { pingerMinecraft } = require("pingerMinecraft")

const data = await pingerMinecraft('95.216.62.176:25629')
console.log(data)
```
# example 2
```js
const { pingerMinecraft } = require("pingerMinecraft")

pingerMinecraft('95.216.62.176:25629').then(data => {
	console.log(data)
})
```