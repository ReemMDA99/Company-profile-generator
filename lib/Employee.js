// employee constructor 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
//get name of employee
    getName() {
        return this.name;
    }

// get id of employee
    getId() {
        return this.id;
    }   

//get email of employee
    getEmail() {
        return this.email;
    }

//get role of employee
    getRole() {
        return 'Employee';
    }
};

//export employee
module.exports = Employee;