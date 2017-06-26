/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

//isIsogram( "Dermatoglyphics" ) == true
//isIsogram( "aba" ) == false
//isIsogram( "moOse" ) == false // -- ignore letter case

// 1. convert to array

// added toLowerCase() on str to ignor case, remove to match case.
function isIsogram(str) {
	
  return !((/([a-zA-Z]).*?\1/).test(str.toLowerCase()));
  
}

isIsogram( "Dermatoglyphics" )
isIsogram( "aba" )
isIsogram( "moOse")

// number one response:
// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }