const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	MIN = 1,
	MAX = 100000

const sumOfDivisors = x => {
	let sum = 1
	for (let i = 2; i < x; i += 1) {
		if ((x % i) === 0) {
			sum += i
		}
	}
	return sum
}

let
	ENTER_LEN = true,
	LEN       = 0,
	SUMS      = []

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
		if (x < MIN || x > MAX) {
			throw new Error(`Number should be between ${MIN} and ${MAX}`)
		}
		SUMS.push(sumOfDivisors(x))
	}

	if (SUMS.length === LEN) {
		rl.close()
	}
})

rl.on('close', () => SUMS.forEach(sum => console.log(sum)))
