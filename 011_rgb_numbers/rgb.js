const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const output = line.split(',').map(input => {
		const vals = input.split('-')
		if (vals.length !== 3) {
			return 'INVALID'
		}

		let color = '#'
		for (let i = 0; i < vals.length; i += 1) {
			const val = parseInt(vals[i], 10)
			if (isNaN(val) || val < 0 || val > 255) {
				return 'INVALID'
			}
			const hex = val.toString(16)
			color += (hex.length < 2 ? `0${hex}` : hex).toUpperCase()
		}
		return color
	}).join(',')

	console.log(output)
})
