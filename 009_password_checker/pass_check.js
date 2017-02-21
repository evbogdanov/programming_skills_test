const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	N_ABC = 4,
	N_123 = 2

const isValid = password => {
	const matchABC = password.match(/[a-zA-Z]/g)
	if (matchABC === null || matchABC.length < N_ABC) {
		return false
	}

	const match123 = password.match(/[0-9]/g)
	if (match123 === null || match123.length < N_123) {
		return false
	}

	return true
}

rl.on('line', password => console.log(isValid(password) ? 'VALID' : 'INVALID'))
