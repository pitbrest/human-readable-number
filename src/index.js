module.exports = function toReadable(number) {

	const sup1 = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eightteen", 19: "nineteen" }
	const sup2 = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety" }
	const sup3 = { 100: "hundred", 1000: "thousand", 1000000: "million" }

	if (number == 0) { return "zero" }
	if (number <= 19 && number > 0) { return sup1[number] }
	if (number > 19 && number < 100) {
		if (sup2[number]) { return sup2[number] }
		else {
			let preres = number.toString().split('')
			return sup2[+preres[0] * 10].toString() + ' ' + sup1[+preres[1]].toString()
		}
	}
	if (number >= 100 && number < 1000) {
		let help1 = number.toString().split('')
		if (number % 100 == 0) {
			return sup1[help1[0]] + ' ' + sup3[100]
		}
		if (number % 10 == 0) {
			return sup1[help1[0]] + ' ' + sup3[100] + ' ' + toReadable(Number(number.toString().slice(1)))
		}
		if (Number(number.toString().slice(0, 2)) % 10 == 0) {
			return sup1[help1[0]] + ' ' + sup3[100] + ' ' + toReadable(Number(number.toString().slice(1)))
		}
		else {
			return sup1[help1[0]] + ' ' + sup3[100] + ' ' + toReadable(Number(number.toString().slice(1, 2) * 10)) + ' ' + toReadable(Number(number.toString().slice(2)))
		}
	}


}
