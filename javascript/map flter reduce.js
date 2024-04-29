//map is used to create ana an by applying the function to each element of array 

let arr = [1,87,845,78,45,22,88,94,2]
let newary = arr.map(num=> num+2)
// console.log(newary)


let ary = arr.filter(number=> number % 2 ===0)
//console.log(ary)



const numbers = [1, 2, 3, 4, 5];

// Using reduce to find the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 
