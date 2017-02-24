const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const STUDENTS = {}

rl.on('line', line => {
	const
		numAndScore = line.split('-'),
		num         = parseInt(numAndScore[0], 10),
		score       = parseInt(numAndScore[1], 10)

	if (isNaN(num) || isNaN(score)) {
		throw new Error ('Invalid roll number or score')
	}

	const highestScore = STUDENTS[num]
	if (highestScore === undefined || highestScore < score) {
		STUDENTS[num] = score
	}
})

rl.on('close', () =>
	Object.keys(STUDENTS)
		.sort((a, b) => STUDENTS[a] > STUDENTS[b] ? -1 : 1)
		.forEach(num => console.log(`${num}-${STUDENTS[num]}`))
)
