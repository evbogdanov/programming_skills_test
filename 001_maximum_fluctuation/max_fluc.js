const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', (line) => {
	const fluc = fluctuation(line)
	console.log(fluc)
})

function fluctuation(str) {
	const strPrices = str.split(',')

	let
		sum      = 0,
		maxPrice = 0

	strPrices.forEach((strPrice) => {
		const price = parseInt(strPrice, 10)
		if (isNaN(price)) {
			throw new Error(`Invalid price: ${strPrice}`)
		}
		sum += price
		if (price > maxPrice) {
			maxPrice = price
		}
	})

	// Prevent division by zero
	if (maxPrice === 0) {
		return 0
	}

	const
		avg  = Math.floor(sum / strPrices.length),
		fluc = (maxPrice - avg) / maxPrice * 100

	return fluc
}
