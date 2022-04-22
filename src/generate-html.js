//Create Employee as a parent class with properties(name, id, email) and methods(getName, getId, getEmail and getRole)

//Create Employee properties using Constructor
class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id =id;
    this.email = email
    }
    
    //get name of employee
    getName() {
        return this.name;
    }
    
    //get ID of employee
    getId() {
        return this.id;
    }

    //get email of employee
    getEmail() {
        return this.email;
    }

    //get Role of employee
    getRole() {
        return this.getRole;
    }
};
//Export Employee 
module.exports = Employee;