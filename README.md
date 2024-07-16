# This library uses https://api.mcsrvstat.us/ !

**Nodejs** library that allows you to get **information** about the minecraft server

# Dependencies
- NodeJs

![image](https://github.com/makarasty/pingerMinecraft/assets/71918286/700ca0b7-c3ae-457b-954c-1bcef77595cc)

# Example 1: Async Function
```js
const pingerMinecraft = require("pingerminecraft")

const data = await pingerMinecraft('95.216.62.176:25629')

console.log(data)
```
# Example 2: Then constructs
```js
const pingerMinecraft = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25629')
	.then(data => console.log(data))
	.catch(error => console.error(error))
```
# Example 2: Then constructs, bedrock true
```js
const pingerMinecraft = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25629', true)
	.then(console.log)
	.catch(console.error)
```
