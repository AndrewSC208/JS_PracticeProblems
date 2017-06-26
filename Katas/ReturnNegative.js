/*
Intructions:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
*/
var test1 = 10,
		test2 = -101;

function makeNegative(num) {
  if(num > 0) {
  	return num *= -1;
  } else {
  	return num;
  }
}

console.log(makeNegative(test1));
console.log(makeNegative(test2));