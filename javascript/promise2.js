// how to use promise we don't create promise it always come form other side 

const getpromise =()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("Successfully done")
        reject("Unexpected error")
    })
}
let promise  = getpromise()
promise.then((res)=>{
    console.log("promise fullfilled", res);
})
promise.catch((err)=>{
    console.log("network error", err);
})