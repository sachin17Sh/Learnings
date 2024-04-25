
//Accessing the values of objects 
const data ={
    fname:"Sachin",
    lname: "Sharma",
    Age: 21,
    Location: "Hp",
    designation: "intern",
    Nationality: "Indian"

}
// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(Object.entries(data));



//Looping an array 
//for printing keys only
let key =[]
for (const key in data) {
    console.log(key);
    }
//for printing values
let value = []
for (const values in data) {
    
    console.log(data[values]);
}


console.log(data);