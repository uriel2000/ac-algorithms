/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

//Impu: a string
//Outpunt: a string with the letters asse swapped
function swapCase(str) {
//Turn out string into an array so we can go through each letter
var myArray= str.split('');
//A variable to store the output string
var output = '';
//Loop through each letter
for(var i = 0; i < myArray.length;i++){

}
// condittional statement to see if something is uppercase
if (myArray [i] ===[i]. toUpperCase()){
	output += myArray[i].toLowerCase();
} else{
	output +=myArray[i].toUpperCase();
}
}
return output; 
// A return that gives us the output

	// Your code
