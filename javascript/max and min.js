//find amximum and minimun number in array
const ARY = [1,2,3,4,5,6,7,8]
//console.log(Math.max(...ARY));
 //console.log(Math.min(...ARY));

//reversing an ARY
 //onsole.log(ARY.reverse());



 //Maximum logic 
const newary =[1,8,7,9,5,44,909]
let max = ""
for (let i = 0; i < newary.length; i++) {
     if (newary[i]>max) {
        max=newary[i]
       
     }
    
}
console.log(max);


//minimum logic
const ary = [ -2,-10,8,7,99,78]
let min = ''
for (let i = 0; i < ary.length; i++) {
    if(ary[i]<min){
        min = ary[i]
    }
    
}
console.log(min);