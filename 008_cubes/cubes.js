const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

let
	ENTER_LEN = true,
	LEN       = 0,
	SUMS      = []

const sumOfCubesUpTo = x => {
	let sum = 0
	for (let i = 1; i <= x; i += 1) {
		sum += i * i * i
	}
	return sum
}

rl.on('line', line => {
	const x = parseInt(line, 10)
	if (isNaN(x) || x < 0) {
		throw new Error(`Unexpected number: ${line}`)
	}

	if (ENTER_LEN) {
		ENTER_LEN = false
		LEN       = x
	}
	else {
		const sum = sumOfCubesUpTo(x)
		SUMS.push(sum)
	}

	if (SUMS.length === LEN) {
		rl.close()
	}
})

rl.on('close', () => SUMS.forEach(sum => console.log(sum)))
