//inheritance is passing down the properties and methods of parent class to child class 
// if you want to use the properties of one class into another then inheritance is used 
//if the child and parent class have same methods or functions than the functions in child class is used child override parent

class Employee {
    constructor(){
        this.Designation ="Software engineer"
    }
     
    
    
    eat(){
        console.log("everyone eats");

    }
    sleeps(){
        console.log("everyone sleeps");
    
    }
}

class Teamlead extends Employee {
    work (){
        console.log("Team manager");
    }
}


class CTO extends Employee{
    work (){
        console.log("Taking care of all things");
    }
}


let TL = new Teamlead()
console.log(TL);

let Cto = new CTO ()
console.log(Cto);


//Super keyword is used to call the constructor on parent class into child class 
//child class is also called derived class 


