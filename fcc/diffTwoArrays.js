// return the symmetric difference of the two arrays.

var arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
var arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

function diffArray(arr1, arr2) {
	
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if(arr2.indexOf(arr1[i]) === -1) {
			result.push(arr1[i]);
		}
	}

	for (var i = 0; i < arr2.length; i++) {
		if(arr1.indexOf(arr2[i]) === -1) {
			result.push(arr2[i]);
		}
	}

	return result;
}

diffArray(arr1, arr2);
