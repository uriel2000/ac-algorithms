/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(str) {
	// Your code
	//change the parameter to a string
	//change the string into an array using .split()
	
	var myArray = number.toString().split("");
	//create  a variable t o store final output
	var output = "";
	//use a modulus to test to see if the numbers are even or odd
	for (var i = 0; i < myArray.length; i ++ ){

	}
	//Use a for loop to go thorough the of numbers and test to see if they are odd 
	//&&operatior to test two conditions: 1) if the number is odd,2) if the number after than is odd as swell
	if (myArray [i] % 2 === && myArray [i + 1] % 2 == 1)
	//if both conditions are met,we mant to insert the dash
	//If the conditions are false, wa to add the numbrt to the final output 
	output  = output + myArray[i] + "_";
}   else {
	//If the conditions are false,we want just want to add nunber to the final output
	outputn += myArray[i];
}
var result = dashInsert("454793");
console.log(result)