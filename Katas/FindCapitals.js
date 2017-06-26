// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let i = 0,
			capitalIndexs = [];

	while ( i < word.length) {
		if(word.charAt(i) == word.charAt(i).toUpperCase()) {
			capitalIndexs.push(i);
		}

		i++;
	}

	return capitalIndexs;
};

// isUpperCase = function(char) {
//   return !!/[A-Z]/.exec(char[0]);
// };

console.log(capitals("Andrew"));
console.log(capitals("AndRew"));

// THIS IS THE NUMBER ONE RESPONSE:
// var capitals = function (word) {
//   return word.split('').reduce(function(memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };