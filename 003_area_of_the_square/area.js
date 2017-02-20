const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const volume = parseFloat(line)
	if (isNaN(volume)) {
		throw new Error(`Invalid volume: ${line}`)
	}
	const
		side = Math.pow(volume, 1 / 3),
		area = Math.pow(side / 2, 2)
	console.log(area)
})
