//copy within same array 
const ARY = [1,2,3,4,5,6,7,8]
 let length= ARY.length

for (let i = 0; i < length; i++) {
     ARY[length+i]=ARY[i]
    
}
// console.log(ARY);




//Finding length without inbuilt functions 
const myary=[1,2,3,4,5,6,7,8,9]
let len =0
while (myary[len]!=undefined){
   
    len++
    
}
// console.log(len);




// star pattern 
let n = 5
for (let i = 0; i <= n; i++) {
      str=""
    for (let j = 0; j <=i; j++) {
        str+= "* "
       
    }
    // console.log(str);
}
let m = 5;

for (let k = m; k >= 0; k--) {
    let star = "";
    
    for (let l = 0; l <= k; l++) {
        star += "* ";
    }
    
    // console.log(star);

}





// checking if the given number already exist in array
const a =[1,7,98,6,5]
b = 5
 let result = ""

for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if(b == a[i]){
        result = 'Value  exist'
        break;    
    }else {
        result ="Value not exist"
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
