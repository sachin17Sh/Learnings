// callback function is a function passed as a argument inside another function which is then invoked inside outer function to complete one action 
//sum of two number 
function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b, sumCallback) {
    sumCallback(a, b)
}
//calculator(45,25, sum)


// example to get the data after 3 sec of interval 
function getdata(dataID, getnextdata){
   setTimeout(() => {
      console.log("data",dataID);
      if (getnextdata) {
        getnextdata()
      }
   }, 3000);
}
//callback hell => nested callback are called callback hell
getdata(10, ()=> {
    getdata(20, ()=>{
        getdata(30, ()=>{
            getdata(40)
        })
    })
})