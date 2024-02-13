// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// class  Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName() {
//         return this.name;
//     }

//     getId() {
//         return this.id;
//     }

//     getEmail() {
//         return this.email;
//     }

//     getRole() {
//        return 'Manager'
//     }
// }

// module.exports = class Manager extends Employee {
//     constructor (name, id, email, github){
//         super(name, id, email);
//         this.github = github;
//     }
//     getGithub() {
//         return this.github;
//     }
// };  

const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;