const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const IDS = []

rl.on('line', line => {
	IDS.push(line.split(','))
	if (IDS.length === 2) {
		const counter = IDS[0].reduce((c, id) => (IDS[1].indexOf(id) === -1) ? c : c+1, 0)
		console.log(counter)
		rl.close()
	}
})
