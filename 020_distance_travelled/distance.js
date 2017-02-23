const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	U = 36 * 1000 / 3600,
	A = 5,
	D = t => U*t + A*t*t / 2

rl.on('line', line => {
	const t = parseInt(line, 10)
	if (isNaN(t) || t < 0) {
		throw new Error(`Unexpected t: ${line}`)
	}
	console.log(D(t))
})
