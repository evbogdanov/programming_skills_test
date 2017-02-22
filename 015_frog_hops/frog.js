const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	LONG_HOP   = 20,
	MEDIUM_HOP = 10,
	SHORT_HOP  = 5

const calculateDistance = hops => {
	const
		hopsByPattern = Math.floor(hops / 3),
		hopsRem       = hops % 3

	let distance = hopsByPattern * (LONG_HOP + MEDIUM_HOP + SHORT_HOP)

	if (hopsRem === 1) {
		distance += LONG_HOP
	}
	else if (hopsRem === 2) {
		distance += LONG_HOP + MEDIUM_HOP
	}

	return distance
}

rl.on('line', line => {
	const hops = parseInt(line)
	if (isNaN(hops) || hops < 0) {
		throw new Error(`Unexpected number of hops: ${line}`)
	}
	console.log(calculateDistance(hops))
})
