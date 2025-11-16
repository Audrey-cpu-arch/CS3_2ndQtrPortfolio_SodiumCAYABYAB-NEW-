let text = ['A', 'C', 'L', 'O', 'Z', 'W'];
console.log(text);

text.sort();
console.log(text);
//It sorts the letters in alphabetical order, then reverses the letters after the sorting
//If there wasn't a sort before the reverse, the the result would have been this instead
//(6) ['W', 'Z', 'O', 'L', 'C', 'A']

//The order matters

//text.reverse only shows the elemnts in reverse, it doens't order them alphabetically or in any other way
text.reverse();
console.log(text);


let number = [34, 2, 56, 78, 1, 9];
console.log(number);
// Find numerically lowest value: 1
let minNumber = Math.min.apply(null, number);
console.log(minNumber);
// Find numerically highest value: 78
let maxNumber = Math.max.apply(null, number);
console.log(maxNumber);

number.sort();
console.log(number);
// sort by default is for strings, so I want to order it in ascending or descending values I should adjust the sort


// Sort for ascending order
number.sort(function(a,b) {
    return a - b;
})
console.log(number);


// Sort for descending order
number.sort(function(a,b) {
    return b-a;
})
console.log(number);