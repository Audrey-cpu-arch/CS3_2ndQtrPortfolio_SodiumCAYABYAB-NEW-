const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

//Convert the string into an array, remove the "+" characters. Save the result in a variable called "myArray"\
let myArray = myString.split("+");
//Store the length of the array in a variable called arrayLength
let arrayLength = myArray.length;
//Store the last item in the array in a variable called lastItem
let lastItem = myArray[myArray.length - 1];

console.log(myArray);
console.log(arrayLength);
console.log(lastItem);

// index of last elemeny is array length -2