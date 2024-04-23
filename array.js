// const Arr=['a','q','w','e','r','t','y','u','1','i','2','o','p','s','3','4','d','f','g','h','j','k','l','7','z','x','c','v','b','n','m']
// let b="a";
// let c = Arr.indexOf(b)
// // console.log(c)
// // console.log(Arr[c])

// Creating em[pty aaray 
let  a = []
// console.log(a)


// finding 1st and last number of array 
let z= [1,'b','c','r',10]

// console.log(z[0] + "is the first number of array");
// console.log(z[z.length-1] + "is the last number of array");



//Adding and removing an number in aaray 
let ary=[1,2,3,4,5,6,7]
// let newno= ary.push(10)
// let last = ary.pop()
// console.log(ary);


// applying loop in aary 
// let myary=[1,2,3,4,7]
// let b =  myary.map(e => e); 
// console.log(b)
// for (let i = 0; i< myary.length; i++) {
//     console.log(myary);    
// }

// myary.forEach(element => {
//     console.log(element);
    
// });

// console.log(myary.indexOf(7));



//find amximum and minimun number in array
const ARY = [1,2,3,4,5,6,7,8]
// console.log(Math.max(...ARY));
// console.log(Math.min(...ARY));

//reversing an ARY
// console.log(ARY.reverse());


// copying array to another without inbuilt function
let length=ARY.length
// const newary=[]
// for (let i = 0; i < length; i++) {
//     newary[i]=array[i]
//   console.log(newary);
// }


//copy in same array 
for (let i = 0; i < length; i++) {
  ARY[length +i] = ARY[i]
    
}
console.log(ARY);
