const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const palindromes = []

rl.on('line', line => {
	const str = line.toLowerCase()
	if (isPalindrome(str)) {
		palindromes.push(str)
	}
})

rl.on('close', () =>
	palindromes.sort().forEach(p => console.log(p))
)

function isPalindrome(str) {
	const
		beg  = 0,
		half = Math.floor(str.length / 2),
		end  = str.length - 1

	for (let i = beg, j = end; i < half; i += 1, j -= 1) {
		if (str[i] !== str[j]) {
			return false
		}
	}

	return true
}
