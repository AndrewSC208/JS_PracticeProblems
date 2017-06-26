// Convert the given number into a roman numeral.

// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// I
// V
// X
// L
// C
// D
// M

function convertToRoman(num) {
	var numLen = num.toString(num).length;
	
	console.log(numLen);

	if(numLen == 4) {
		console.log('thousand');
	} else if (numLen == 3) {
		console.log('hundred');
	} else if (numLen == 2) {
		console.log('tenth');
	} else if (numLen == 1) {
		console.log('one');
	} else {
		console.log("Num has no length");
	}

}

convertToRoman(3999)

