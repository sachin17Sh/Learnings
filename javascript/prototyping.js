//It is used to access the property and methods of one objects into another 
const Employee = {
    calctax() {
        console.log("You have to pay 8% tax");
    }
}

const newemployee = {
    salary: 500000
}

const newemployee2 = {
    salary: 500000
}

const newemployee3 = {
    salary: 500000
}


newemployee.__proto__ = Employee;
newemployee2.__proto__ = Employee;
newemployee3.__proto__ = Employee;

newemployee.calctax(); 
newemployee2.calctax(); 
newemployee3.calctax(); 



