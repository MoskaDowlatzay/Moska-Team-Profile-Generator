// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class  Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
     getName() {
         return this.name;
     }
     
     getId() {
         return this.id;
     } 

     getEmail() {
         return this.email;
     }  

     getRole() {
       return "Engineer";
     }
}

// Exporting the Engineer class with the help of module.exports
module.exports = class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}