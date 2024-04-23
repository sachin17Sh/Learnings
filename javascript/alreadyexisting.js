
// checking if the given number already exist in array
const a = [1, 7, 98, 6, 5]
b = 5
let result = ""

for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if (b == a[i]) {
        result = 'Value  exist'
        break;
    } else {
        result = "Value not exist"
    }
}
// console.log(result);

//another way

// const a = [1, 7, 98, 6, 5];
// const b = 33;
// let result = "Value not exist"; 

// for (let i = 0; i < a.length; i++) {
//     if (b === a[i]) {
//         result = 'Value  exist';
//         break;
//     }
// }

// console.log(result);
