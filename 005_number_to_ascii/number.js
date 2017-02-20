const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	MIN = 40,
	MAX = 125

let
	ENTER_LEN = true,
	LEN       = 0,
	ASCII     = []

rl.on('line', line => {
	const x = parseInt(line, 10)
	if (isNaN(x) || x < 1) {
		throw new Error(`Unexpected number: ${line}`)
	}

	if (ENTER_LEN) {
		ENTER_LEN = false
		LEN       = x
		return
	}

	if (x < MIN || x > MAX) {
		throw new Error(`Give me a number between ${MIN} and ${MAX}`)
	}
	ASCII.push(x)

	if (LEN === ASCII.length) {
		ASCII.forEach(char => process.stdout.write(String.fromCharCode(char)))
		process.stdout.write('\n')
		rl.close()
	}
})
