const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const isValid = username => (
	username.length >= 5
	&&
	username.length <= 10
	&&
	! /\s/.test(username)
	&&
	/[A-Z]/.test(username)
	&&
	/[0-9]/.test(username)
	&&
	/[@#*=]/.test(username)
)

rl.on('line', username => {
	console.log(isValid(username) ? 'PASS' : 'FAIL')
})
