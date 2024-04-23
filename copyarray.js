//copy within same array 
const ARY = [1, 2, 3, 4, 5, 6, 7, 8]
let length = ARY.length

for (let i = 0; i < length; i++) {
    ARY[length + i] = ARY[i]

}
 console.log(ARY);


 // copying array to another without inbuilt function
let len=ARY.length
const newary=[]
for (let i = 0; i < len; i++) {
     newary[i]=array[i]
   console.log(newary); }
