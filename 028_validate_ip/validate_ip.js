const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const isValid = address => {
	const parts = address.split('.')
	return (
		parts.length === 4
		&&
		parts.map(p => parseInt(p, 10)).every(p => !isNaN(p) && p >= 0 && p <= 255)
	)
}

rl.on('line', address => console.log(isValid(address) ? 'VALID' : 'INVALID'))
