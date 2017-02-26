const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const num = parseInt(line, 10)
	if (isNaN(num)) {
		throw new Error(`'${line}' is not a number`)
	}
	const
		abs   = Math.abs(num),
		sign  = num < 0 ? '-' : '',
		bin   = abs.toString(2),
		len   = bin.length + (sign === '-' ? 1 : 0),
		zeros = len >= 16 ? '' : '0'.repeat(16 - len)

	console.log(`${sign}${zeros}${bin}`)
})
