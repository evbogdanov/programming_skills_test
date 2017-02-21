const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	line.split(' ').forEach(word => {
		if (word.match(/^[A-Z]/) !== null) {
			console.log(word)
		}
	})
})
