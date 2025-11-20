//1. Remove the last item from the array.
//2. Add any two new names to the end of the array.
//3. Using a loop, append the index number of each item to the end of the item in the format: "Name (index)".
//4. Join the array back into a string. Save the result in a variable called "myString".
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here
myArray.pop(myArray.length-1)
myArray.push("Sui Rei", "Shisui")




for(let i = 0; i<myArray.length; i++){
    myArray[i] = myArray[i] + "(" + i + ")";
    //rewrites the array
    // without "myArray[i] =" it jsut does the rpocess but oesn't chnage or store anything hence, why it only outputs only the names when there's no ""myArray[i] =
}

let myString = myArray.toString();


// Don't edit the code below here

console.log(myString);







