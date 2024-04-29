function Sum(a,b) {
    // console.log(a*b);
    return a*b
}
Result = Sum(5,8)
console.log("Sum is " + Result);




//  a function can be stored in variable as Arrow function
const funct1 = (x)=>{
    // console.log("this is arrow function",x);
}
funct1(66)
funct1(30)



//function to calculate the temp 
function toCelsius(f) {
    return (5/9) * (f-32);
  }
let value = toCelsius(45)
console.log(value);

