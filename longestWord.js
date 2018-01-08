//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19


function findLongestWord(str) {
 //create a variable that will store the output of string to an array
 var stringIntoArray= str.split(" ");
 //variablemto store longest word length
 var longest=0;
 //for loop
 for(var i=0;i=stringIntoArray.length;i++){
   //conditionnal statemment 
   if(longest<stringIntoArray[i].length){
      longest=stringIntoArray[i].length;
   }


 }
 
 
  return longest;
}

findLongestWord("what if we super-long word such as otorhinollaryngology");
