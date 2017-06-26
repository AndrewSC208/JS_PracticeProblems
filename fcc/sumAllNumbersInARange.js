var z = [5, 10];

function sumAll(arr) {
	var rangeArr = [];

	// sort given array:
	arr.sort(function(a, b) {
		return a - b;
	});

	// create range array:
	for (var i = arr[0]; i <= arr[1]; i++) {
		rangeArr.push(i);
	}

	// sum range:
	var sum = rangeArr.reduce(function(a, b) {
		return a + b;
	});

	// return final value:
	console.log(sum);
}

sumAll(z);
