const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const isValidDate = str => {
	const
		bits = str.split('-').map(b => parseInt(b, 10)),
		date = new Date(bits[2], bits[0] - 1, bits[1])
	return date && (date.getMonth() + 1) === bits[0]
}

rl.on('line', str => {
	console.log(isValidDate(str) ? 'VALID' : 'INVALID')
})
