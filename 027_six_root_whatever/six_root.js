// See Go's code for explanation
const rootLooksLikeInt = (num, r) => '000000' === Math.pow(num, 1/r).toFixed(6).substr(-6)

for (let num = 2; num <= 20000; num += 1) {
	if (rootLooksLikeInt(num, 6)) {
		console.log(num)
	}
}
