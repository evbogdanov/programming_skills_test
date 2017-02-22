const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const sumTwoLines = (line1, line2) => {
	const
		nums1 = line1.split(','),
		nums2 = line2.split(',')

	if (nums1.length !== nums2.length) {
		throw new Error('Both lines should have the same number of elements')
	}

	return nums1.map((n, i) => {
		const
			n1 = parseInt(n, 10),
			n2 = parseInt(nums2[i], 10)
		if (isNaN(n1) || isNaN(n2)) {
			throw new Error('Not a number found')
		}
		return n1 + n2
	}).join(',')
}

const LINES = []

rl.on('line', line => {
	LINES.push(line)
	if (LINES.length === 2) {
		const sum = sumTwoLines(LINES[0], LINES[1])
		console.log(sum)
		rl.close()
	}
})
