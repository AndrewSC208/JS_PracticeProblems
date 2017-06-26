// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example:
//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
	let i = 0, e = 0,
			oddArray = [],
			oddSortedArray = [],
			SortedArray = [];

	// map odd numbers into an array:
	while (i < array.length) {
		if (array[i] % 2) {
			oddArray.push(array[i]);
		} 
		i++;
	}

	// sort odd array (least to greates):
	oddSortedArray = oddArray.sort((a, b) => {
		return a - b;
	});

	// merg arrays without changing even number values:
	while(e < array.length) {
		// if odd:
		if(array[e] % 2) {
			SortedArray.push(oddSortedArray[0]);
			oddSortedArray.splice(0, 1);
		} else {
			SortedArray.push(array[e]);
		}
		e++;
	}

	return SortedArray;
}

sortArray([5, 3, 2, 8, 1, 4]);

// another way of doing it (Much more clean):
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
