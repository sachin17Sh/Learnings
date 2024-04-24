//CLASS is the program code template to creat an object 
// class is the blueprint for creating an object 
//classes are used when we want to use the same template for creating multiple objects 
//e.g

    class Car {
        start() {
            console.log("Starting engine");
        }
        
        stop() {
            console.log("Engine off");
        }
        
        setColor(color) {
            console.log(`Black`);
        }
        
        setBrand(brand) {
            this.brand = brand;
        }
    }
    
    let fortuner = new Car();
    fortuner.setBrand("Toyota");
    console.log("Brand of fortuner:", fortuner.brand);
    
    let gimny = new Car();
    gimny.setBrand("Maruti Suzuki");
    console.log("Brand of Gimny:", gimny.brand);
    
    let thar = new Car();
    thar.setBrand("Mahindra");
    console.log("Brand of Thar:", thar.brand);
    