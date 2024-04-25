//Create a class user with two properties name and email. It also have the methods call viewdata () that allow user to view data 
// class, inheritance , super etc

DATA = "View Data"
class user {
    constructor(name,email){
        this.name = name 
        this.email=email
    }
    viewdata(){
        console.log("data=", DATA);
    }
}

student1 = new user("Sachin", "abc@gmail.com");
student2 = new user("Rohit", "xyz@gmail.com");
student3 = new user("hari" ,"harihari@gmail.com");
teacher = new user("teacher", "techer@gmail.com")

// console.log(student1);
// student1.viewdata()
// console.log(student2);
// student2.viewdata()
// console.log(student3);

// console.log(teacher);

//create a new class called admit which inherfit from user and create new method for admin to edit data 


class Admin extends user {
    constructor(name,email){
        super(name,email)
    }
    editdata(){
        DATA ="some new data "

    }
}
admin = new Admin("Admin", "Admin@gmail.com")
console.log(admin);
 console.log(DATA);
 admin.editdata()
 console.log(DATA);