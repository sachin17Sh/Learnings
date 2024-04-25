// try and catch method is used to handle the error in code if you have multiple line of code and you want to identify the error this method is used 
// try and catch help to print the log after the errors also

let a =  10
let b = 10
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
try{
    console.log("a-b = ", a-d); // error is c is not defined 
} catch(err){ //err is error object 
    console.log(err);
}

console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
