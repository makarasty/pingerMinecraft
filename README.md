![изображение](https://github.com/makarasty/pingerMinecraft/assets/71918286/dec9792a-75e4-43e5-9e24-5a9eb272f00c)# This library uses https://www.minecraftpinger.com/ !

**Nodejs** library that allows you to get **information** about the minecart server

# Dependencies
- NodeJs

![изображение](https://github.com/makarasty/pingerMinecraft/assets/71918286/bcc0e9b3-3ce4-4783-b052-8222504d5e24)

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
