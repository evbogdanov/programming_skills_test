const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const RACERS = []

rl.on('line', line => {
	const nameAndPos = line.split('-')
	if (nameAndPos.length !== 2) {
		throw new Error('Invalid format. Expected: NAME-POSITION')
	}
	const racer = {
		name: nameAndPos[0],
		pos:  parseInt(nameAndPos[1], 10)
	}
	if (isNaN(racer.pos)) {
		throw new Error('Position should be of numeric type')
	}
	RACERS.push(racer)
})

rl.on('close', () => {
	RACERS
		.sort((a, b) => (a.pos < b.pos) ? -1 : 1)
		.forEach(r => console.log(`${r.name}-${r.pos}`))
})
