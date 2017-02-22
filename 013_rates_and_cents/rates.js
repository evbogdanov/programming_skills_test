const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const calculateSum = (units, sum) => {
	if (units > 300) {
		return calculateSum(300, (units-300)*80)
	}

	if (units > 100) {
		return calculateSum(100, sum+(units-100)*70)
	}

	return sum + units*60
}

rl.on('line', line => {
	const units = parseInt(line, 10)
	if (isNaN(units) || units < 0) {
		throw new Error('Unexpected units')
	}
	console.log(calculateSum(units, 0))
})
