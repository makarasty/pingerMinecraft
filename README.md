# This library uses https://www.minecraftpinger.com/ !

**Nodejs** library that allows you to get **information** about the minecart server

# Dependencies
- NodeJs

![изображение](https://github.com/makarasty/pingerMinecraft/assets/71918286/47e69df6-7d24-4f79-b5ac-3c7c26a4c41f)

# Example 1: Async Function
```js
const { pingerMinecraft } = require("pingerminecraft")

const data = await pingerMinecraft('95.216.62.176:25629')
console.log(data)
```
# Example 2: Then constructs
```js
const { pingerMinecraft } = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25629')
	.then(data => console.log(data))
	.catch(error => console.error(error))
```
# Example 2: Then constructs using your Promise library, JSON
```js
const { pingerMinecraft } = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25629', Promise, JSON)
	.then(data => console.log(data))
	.catch(error => console.error(error))

pingerMinecraft('95.216.62.176:25629', Promise, JSON)
	.then(console.log)
	.catch(console.error)
```
