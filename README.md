# This library uses https://api.mcsrvstat.us/ !

**Nodejs** library that allows you to get **information** about the minecraft server

# Install
`npm i pingerminecraft`

# OS Dependencies
- Node.js

# Lib Dependencies
- undici

![image](https://github.com/user-attachments/assets/fd7fe3a3-aea5-4bf6-814a-0133ce44ab05)

# Example 1: Async Function
```js
const pingerMinecraft = require("pingerminecraft")

const data = await pingerMinecraft('95.216.62.176:25565')

console.log(data)
```

# Example 2: Then constructs
```js
const pingerMinecraft = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25565')
	.then(data => console.log(data))
	.catch(error => console.error(error))
```

# Example 2: Then constructs, bedrock true
```js
const pingerMinecraft = require("pingerminecraft")

pingerMinecraft('95.216.62.176:25566', true)
	.then(console.log)
	.catch(console.error)
```
