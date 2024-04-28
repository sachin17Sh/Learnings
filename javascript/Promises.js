// promises is for the eventual completion of task, It is an object in JS 
// This is the solution for callback hell 
// resolve and reject are the callbacks in JS 

// let promise = new Promise((resolve,reject)=>{
//      console.log("I am a promise");
//      resolve("success")
//      reject(error)
//     })

//example get daTA FROM API
function getdata(dataID, getnextdata) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success")
            if (getnextdata) {
                getnextdata()
            }
        }, 3000);
    })
}
let result= getdata(55)
console.log(result);

