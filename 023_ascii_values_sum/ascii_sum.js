const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const strings = line.split(',')
	if (strings.length !== 2) {
		throw new Error('Invalid input. Expected: STR1,STR2')
	}
	const sum1 = [].reduce.call(strings[0], (sum, ch) => sum + ch.charCodeAt(), 0)
	const sum2 = [].reduce.call(strings[1], (sum, ch) => sum + ch.charCodeAt(), 0)
	console.log(sum1 - sum2)
})
