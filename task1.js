const myArray = []; //Q1
myArray.push("apple", "banana", "cherry"); //Q2
console.log(myArray[0]); //Q3
console.log(myArray[myArray.length - 1]); //Q4
myArray.unshift("mango"); //Q5
console.log(myArray);
myArray.pop(); //Q6
console.log(myArray);

const numbers = [5, 10, 15, 20, 25];
numbers.splice(2, 1);
console.log(numbers); //Q7

function arrLength(array) {
  //Q8
  console.log(array.length);
}
arrLength(myArray);
arrLength(numbers);

const temperatures = [72, 68, 74, 80, 76]; //Q9
console.log(Math.max(...temperatures));

if (myArray.indexOf("banana")) {
  return console.log("true");
} else {
  console.log("false");
}
