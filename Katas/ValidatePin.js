//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.
/* example:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

/* A good link on RegEx in JS 

http://eloquentjavascript.net/09_regexp.html

*/

function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6) {
  	// match length now, check int for all cars.
  	var ifPinStr = /^\D/.test(pin);

  	if (ifPinStr) {
  		return false;
  	} else {
  		return true;
  	}

  } else {
  	return false;
  }
}

// This is the number one solution! And man it's much more clean!
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("5T9891"));

