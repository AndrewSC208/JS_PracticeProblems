/*
INSTRUCTIONS:
Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

difference([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

difference([1,2,2,2,3],[2]) == [1,3]
*/
var a = [1,2,2,2,3];
var b = [2];

function array_diff(a, b) {
  return filtered = a.filter(function(e){
  	return this.indexOf(e)<0;
  },
  b);
}

array_diff(a, b);