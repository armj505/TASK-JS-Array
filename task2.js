/**
- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
  // Your code here
  if (numbers.length % 2 === 1) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isArrayLengthOdd([1, 2, 3]);
isArrayLengthOdd([1, 2, 3, 4]);
/**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
function isArrayLengthEven(numbers) {
  // Your code here
  if (numbers.length % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isArrayLengthEven([1, 2, 3]);
isArrayLengthEven([1, 2, 3, 4]);
/**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  console.log(instructors);
}
const instructorsName = ["Mshary", "Hasan"];
addLailaToArray(instructorsName);
/**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
function eliminateTeam(teams) {
  // Your code here
  teams.pop(teams.length - 1);
  console.log(teams);
}
const eliminateTeams = ["Brazil", "Germany", "Italy"];
eliminateTeam(eliminateTeams);
/**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 === 0) {
    console.log(fruits.slice(fruits.length / 2));
  } else {
    console.log([]);
  }
}
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);

/**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
function youGottaCalmDown(shout) {
  // Your code here
  const arr = shout.split("");
  arrFinal = arr.indexOf(arr.pop());
  arrNew = arr.slice(0, arrFinal + 1);
  console.log(arrNew.join(""));
  // .include
}

youGottaCalmDown("HI!!!!!!!!!!");
youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!");
youGottaCalmDown("Hellooooo");
