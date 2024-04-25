//CLASS is the program code template to create an object 
// class is the blueprint for creating an object 
//classes are used when we want to use the same template for creating multiple objects 
//constructor is the method in javascript and automatically invoke by new(while using new)
// constructor is used to initialize the object 


    class Car {
        constructor(brand, milage){
            // console.log("Creating new obj"); // it can be used to initialize the value
            this.brand = brand;
            this.milage = milage
        }
        start() {
            console.log("Starting engine");
        }
        
        stop() {
            console.log("Engine off");
        }
        
        setColor(color) {
            console.log(`Black`);
        }
        
      
    }
    
    let fortuner = new Car("Toyota",20);
    
   console.log(fortuner);
    
    let gimny = new Car("Maruti Suzuki", 20);
    
    console.log(gimny);
    
    let thar = new Car("Mahindra",18);
    
    console.log(fortuner);
    