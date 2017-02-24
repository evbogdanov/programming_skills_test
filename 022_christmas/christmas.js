const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const n = parseInt(line, 10)
	if (isNaN(n) || n < 1 || n > 9) {
		throw new Error ('The program expects a number between 1 and 9')
	}
	for (let i = 1; i <= n; i += 1) {
		let str = ' '.repeat(n - i)
		str += `${i} `.repeat(i).trimRight()
		console.log(str)
	}
})
