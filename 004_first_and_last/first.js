const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

rl.on('line', line => {
	const num = parseInt(line, 10)
	if (isNaN(num)) {
		throw new Error(`Invalid num: ${line}`)
	}

	const
		strSqr = `${num * num}`,
		len    = strSqr.length

	if (len === 1) {
		console.log(strSqr)
	}
	else {
		const
			firstDigit = parseInt(strSqr[0], 10),
			lastDigit  = parseInt(strSqr[len-1], 10)
		console.log(firstDigit + lastDigit)
	}
})
