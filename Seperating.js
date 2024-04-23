
//separting the values inside the array 

const data = [1, 2, "tv", 5.578, "apple", "mango", true, false, 5.7854, 5, 89];
let num = []
let string = []
let bool = []
for (let i = 0; i < data.length; i++) {

    if (typeof (data[i]) === 'number') {
        num.push(data[i])

    } else if (typeof (data[i]) === "string") {
        string.push(data[i])

    } else if (typeof (data[i]) === 'boolean') {
        bool
        .push(data[i])

    } else {
        console.log("invalid");
    }
}
const mainArray = []
mainArray.push(num, string,bool)
console.log(mainArray);


// const data = [1, 2, "tv", 5.578, "apple", "mango", true, false, 5.7854, 5, 89];

// const numb = data.filter(item => typeof item === 'number');
// const strings = data.filter(item => typeof item === 'string');
// const booleans = data.filter(item => typeof item === 'boolean');
// console.log(numb);
// console.log(strings);
// console.log(booleans);
// const mainArray = [];

// mainArray.push(numb, strings, booleans);

// console.log(mainArray);