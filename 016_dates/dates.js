const readline = require('readline')

const rl = readline.createInterface({
	input:    process.stdin,
	output:   process.stdout,
	terminal: false
})

const
	DAY          = 28,
	HOURS        = 0,
	MINUTES      = 0,
	SECONDS      = 0,
	MILLISECONDS = 0,
	WEEKDAYS     = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

rl.on('line', line => {
	const yearAndMonth = line.split('-')
	if (yearAndMonth.length !== 2) {
		throw new Error('Invalid format. Expected: YEAR-MONTH')
	}

	const
		year  = parseInt(yearAndMonth[0], 10),
		month = parseInt(yearAndMonth[1], 10)
	if (isNaN(year) || isNaN(month) || month < 0 || month > 11) {
		throw new Error('Invalid year or month')
	}

	const
		date    = new Date(year, month, DAY, HOURS, MINUTES, SECONDS, MILLISECONDS),
		weekday = WEEKDAYS[date.getDay()]
	console.log(weekday)
})
