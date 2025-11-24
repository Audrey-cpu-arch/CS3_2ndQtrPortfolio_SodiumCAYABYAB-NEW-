// Example function
function exampleFunction(input) {
    // Adjust the variable (trim or convert to decimals)
    let variable = /* adjust input here */;

    // You cannot turn variable into an array directly
    // You need a separate array
    let array = [];

    // It is possible to sort this later
    array.push(variable);
array.sort(function(a,b){return a - b}) ;
for(let i = 0; i < 3; i++){

    console.log(array[i]);
    // Notes:
    // - No need for loops unless required
    // - Use "variable" when comparing/outputting one value
    // - Use "array" when handling multiple values
}

return array;
}
// Example input
let input = "valuesbeinggenerated";